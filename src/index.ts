import { getFormattedMeals } from './services/mealService'
;(async () => {
  const formattedMeals = await getFormattedMeals()
  console.log('\n All Meals:\n')
  console.log(formattedMeals)
})()
