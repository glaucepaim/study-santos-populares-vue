const API_URL = '/eventos.json'

export async function fetchEvents() {
  try {
    const response = await fetch(API_URL)
    
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`)
    }
    
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching events:', error)
    throw error
  }
}

export function filterEvents(events, filters) {
  let result = [...events]
  
  // Filter by city
  if (filters.city && filters.city !== 'All') {
    result = result.filter(e => e.city === filters.city)
  }
  
  // Filter by type
  if (filters.type && filters.type !== 'All') {
    result = result.filter(e => e.type === filters.type)
  }
  
  // Filter by search
  if (filters.search && filters.search.trim() !== '') {
    const term = filters.search.toLowerCase()
    result = result.filter(e => 
      e.name.toLowerCase().includes(term) ||
      e.description.toLowerCase().includes(term) ||
      e.location.toLowerCase().includes(term)
    )
  }
  
  // Filter by start date
  if (filters.startDate) {
    result = result.filter(e => new Date(e.date) >= new Date(filters.startDate))
  }
  
  // Filter by end date
  if (filters.endDate) {
    result = result.filter(e => new Date(e.date) <= new Date(filters.endDate))
  }
  
  return result
}

export function sortEvents(events, criteria = 'date') {
  const sorted = [...events]
  
  switch (criteria) {
    case 'date':
      return sorted.sort((a, b) => new Date(a.date) - new Date(b.date))
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
    case 'city':
      return sorted.sort((a, b) => a.city.localeCompare(b.city))
    case 'price':
      return sorted.sort((a, b) => {
        const priceA = a.price === 'Gratuito' ? 0 : parseFloat(a.price)
        const priceB = b.price === 'Gratuito' ? 0 : parseFloat(b.price)
        return priceA - priceB
      })
    default:
      return sorted
  }
}