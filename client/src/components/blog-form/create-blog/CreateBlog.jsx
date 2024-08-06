import { useNavigate } from 'react-router-dom';
import { useCreateBlog } from '../../../hooks/useBlogs';
import { useForm } from '../../../hooks/useForm';
import styles from './CreateBlog.module.css'; // Import the CSS module

const initialValues = {
    title: '',
    imageUrl: '',
    description: ''
}
export default function CreateBlog() {
    const navigate = useNavigate();
    const createBlog = useCreateBlog();

    const createHandler = async (values) => {
        console.log('Form Data:', values);
        try {
            const { _id: blogId } = await createBlog(values);
            navigate(`/blogs`);
        } catch (error) {
            // TODO set error state
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
                    <input type="text" id="title" name="title" value={values.title} onChange={changeHandler} placeholder="Enter a blog title..." className={styles.inputText} />

                    <label htmlFor="imageUrl">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={values.imageUrl} onChange={changeHandler} placeholder="Upload a photo..." className={styles.inputText} />

                    <label htmlFor="description">Description:</label>
                    <textarea name="description" value={values.description} onChange={changeHandler} id="description" placeholder="Enter blog description..." className={styles.textarea}></textarea>

                    <input className={styles.submitButton} type="submit" value="Create Blog" />
                </div>s
            </form>
        </section>
    );
}
