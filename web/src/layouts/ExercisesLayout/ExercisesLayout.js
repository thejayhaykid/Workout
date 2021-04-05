import { Link, routes } from '@redwoodjs/router';
import { Toaster } from '@redwoodjs/web/toast';
import { useAuth } from '@redwoodjs/auth';

const ExercisesLayout = (props) => {
  const { isAuthenticated } = useAuth();
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.exercises()} className="rw-link">
            Exercises
          </Link>
        </h1>
        {isAuthenticated ? (
          <Link to={routes.newExercise()} className="rw-button rw-button-green">
            <div className="rw-button-icon">+</div> New Exercise
          </Link>
        ) : null}
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  );
};

export default ExercisesLayout;
