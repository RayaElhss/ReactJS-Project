import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";
import { useBlogEdit } from "../../../hooks/useBlogEdit";
import { useForm } from "../../../hooks/useForm";
import { updateBlogPost } from "../../../api/blogs-api";
import { useEffect, useState } from "react";

import styles from "./EditBlog.module.css";


export default function EditBlog() {
    const { blogId } = useParams();
    const navigate = useNavigate();
    const { accessToken } = useAuthContext();

    const { blog, loading, error } = useBlogEdit(blogId);

    const [initialValuesSet, setInitialValuesSet] = useState(false);

    const { values, changeHandler, submitHandler, setValues } = useForm(
        {
            title: blog ? blog.title : "",
            imageUrl: blog ? blog.imageUrl : "",
            description: blog ? blog.description : "",
        }, async (updatedData) => {
            try {
                await updateBlogPost(blogId, updatedData, accessToken);
                navigate(`/blogs/${blogId}`);
            } catch (error) {
                console.log("Failed to update blog post:", error);

            }
        });

    // Set the initial form values when the blog data is first loaded
    useEffect(() => {
        if (blog && !initialValuesSet) {
            setValues({
                title: blog.title,
                imageUrl: blog.imageUrl,
                description: blog.description,
            });
            setInitialValuesSet(true); // Prevents setting values again
        }
    }, [blog, initialValuesSet, setValues]);


    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <section className={styles.auth}>
            <form id={styles.createPage} onSubmit={submitHandler}>
                <div className={styles.container}>
                    <h1>Edit Blog</h1>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={values.title}
                        onChange={changeHandler}
                        placeholder="Enter a blog title..."
                        className={styles.inputText}
                        required
                    />

                    <label htmlFor="imageUrl">Image URL:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={changeHandler}
                        placeholder="Upload a photo..."
                        className={styles.inputText}
                        required
                    />

                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={values.description}
                        onChange={changeHandler}
                        placeholder="Enter blog description..."
                        className={styles.textarea}
                        required
                    ></textarea>

                    <input className={styles.submitButton} type="submit" value="Update Blog" />
                </div>
            </form>
        </section>
    );
}