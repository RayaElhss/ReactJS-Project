import { useNavigate } from 'react-router-dom';
import { useCreateBlog } from '../../../hooks/useBlogs';
import { useForm } from '../../../hooks/useForm';
import styles from './CreateBlog.module.css'; // Import the CSS module
import { useBlogValidation } from '../../../hooks/useBlogValidation';

const initialValues = {
    title: '',
    imageUrl: '',
    description: ''
}
export default function CreateBlog() {
    const navigate = useNavigate();
    const createBlog = useCreateBlog();

    const { fieldErrors, validateFields } = useBlogValidation();

    const createHandler = async (values) => {
        // Validate fields
        const validationErrors = validateFields(values);

        // If there are validation errors, stop the submission
        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        console.log('Form Data:', values);
        try {
            const { _id: blogId } = await createBlog(values);
            navigate(`/blogs`);
        } catch (error) {
            console.log(error.message);
        }
    };

    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialValues, createHandler);

    return (
        <section className={styles.auth}>
            <form id={styles.createPage} onSubmit={submitHandler}>
                <div className={styles.container}>
                    <h1>Create Blog</h1>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={values.title}
                        onChange={changeHandler}
                        placeholder="Enter a blog title..."
                        className={styles.inputText}
                    />
                    {fieldErrors.title && (
                        <small className="text-danger">{fieldErrors.title}</small>
                    )}

                    <label htmlFor="imageUrl">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={changeHandler}
                        placeholder="Upload a photo..."
                        className={styles.inputText}
                    />
                    {fieldErrors.imageUrl && (
                        <small className="text-danger">{fieldErrors.imageUrl}</small>
                    )}

                    <label htmlFor="description">Description:</label>
                    <textarea
                        name="description"
                        value={values.description}
                        onChange={changeHandler}
                        id="description"
                        placeholder="Enter blog description..."
                        className={styles.textarea}
                    ></textarea>
                    {fieldErrors.description && (
                        <small className="text-danger">{fieldErrors.description}</small>
                    )}

                    <input className={styles.submitButton} type="submit" value="Create Blog" />
                </div>
            </form>
        </section>
    );
}