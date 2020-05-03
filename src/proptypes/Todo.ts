import { bool, shape, string } from 'prop-types';

export default shape({
    id: string.isRequired,
    title: string.isRequired,
    completed: bool.isRequired,
});