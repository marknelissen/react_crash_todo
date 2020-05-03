import { bool, number, shape, string } from 'prop-types';

export default shape({
    id: number.isRequired,
    title: string.isRequired,
    completed: bool.isRequired,
});