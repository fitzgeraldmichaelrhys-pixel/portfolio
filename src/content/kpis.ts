import data from './kpis.json' with { type: 'json' }

export type Kpi = {
  id: string
  value: string
  label: string
  confirmed: boolean
}

const items = data.items as Kpi[]

function pick(ids: readonly string[]): Kpi[] {
  return ids.map((id) => {
    const row = items.find((item) => item.id === id)
    if (!row) throw new Error(`Unknown KPI id: ${id}`)
    return row
  })
}

/** Hero strip — confirmed PayPal averages. */
export const HIGHLIGHTS = pick(data.heroIds)

/** Full scorecard. Replace any `confirmed: false` row in kpis.json. */
export const PAYPAL_SCORECARD = items

/** Chips on the PayPal experience card. */
export const PAYPAL_METRICS = pick(data.experienceIds)
