import { useNavigate } from 'react-router-dom';
import styles from './BackButton.module.css'; // Import the CSS module

// Define a BackButton component
export default function BackButton({ to = '/', children = '← Back', className = '' }) {
    const navigate = useNavigate();

    // Handle navigation on button click
    const handleNavigateBack = () => {
        navigate(to);
    };

    return (
        <button
            className={`${styles.backButton} ${className}`} // Apply styles from the CSS module
            onClick={handleNavigateBack}
        >
            {children} {/* Allow custom button text */}
        </button>
    );
}