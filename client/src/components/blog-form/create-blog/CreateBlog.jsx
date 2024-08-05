import { useForm } from '../../../hooks/useForm';
import styles from './CreateBlog.module.css'; // Import the CSS module

// const initialValues = 
export default function CreateBlog() {
    const {} = useForm();
    return (
        <section className={styles.auth}>
        <form id={styles.createPage}>
          <div className={styles.container}>
            <h1>Create Blog</h1>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" placeholder="Enter a blog title..." className={styles.inputText} />
  
            <label htmlFor="imageUrl">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." className={styles.inputText} />
  
            <label htmlFor="summary">Description:</label>
            <textarea name="summary" id="summary" placeholder="Enter blog description..." className={styles.textarea}></textarea>
  
            <input className={styles.submitButton} type="submit" value="Create Blog" />
          </div>
        </form>
      </section>
    );
}
