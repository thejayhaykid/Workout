// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/exercises/new" page={NewExercisePage} name="newExercise" />
      <Route path="/exercises/{id:Int}/edit" page={EditExercisePage} name="editExercise" />
      <Route path="/exercises/{id:Int}" page={ExercisePage} name="exercise" />
      <Route path="/exercises" page={ExercisesPage} name="exercises" />
      <Route path="/workouts/new" page={NewWorkoutPage} name="newWorkout" />
      <Route path="/workouts/{id:Int}/edit" page={EditWorkoutPage} name="editWorkout" />
      <Route path="/workouts/{id:Int}" page={WorkoutPage} name="workout" />
      <Route path="/workouts" page={WorkoutsPage} name="workouts" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes