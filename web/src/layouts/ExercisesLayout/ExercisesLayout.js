import { Link, routes } from '@redwoodjs/router';
import { Toaster } from '@redwoodjs/web/toast';

const ExercisesLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.exercises()} className="rw-link">
            Exercises
          </Link>
        </h1>
        <Link to={routes.newExercise()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Exercise
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  );
};

export default ExercisesLayout;
