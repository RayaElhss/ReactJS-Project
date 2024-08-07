import { useForm } from "../../hooks/useForm";
import styles from './CommentForm.module.css';

export default function CommentForm({ onSubmit }) {
    const { values, changeHandler, submitHandler, setValues } = useForm(
        { comment: '' },
        (formValues) => {
            onSubmit(formValues.comment);
            setValues({ comment: '' });
        }
    );

    return (
        <form className={styles.commentForm} onSubmit={submitHandler}>
            <textarea
                className={styles.commentInput}
                name="comment"
                value={values.comment}
                onChange={changeHandler}
                placeholder="Add a comment..."
                rows="4"
            />
            <button type="submit" className={styles.submitButton}>
                Submit Comment
            </button>
        </form>
    );
}

