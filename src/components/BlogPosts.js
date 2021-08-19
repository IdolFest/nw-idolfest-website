import { useStaticQuery, graphql, Link } from 'gatsby'
import * as React from "react"

export default function BlogPosts() {
    const { blog } = useStaticQuery(
        graphql`
            query MyQuery {
                blog: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
                posts: nodes {
                    fields {
                    slug
                    }
                    frontmatter {
                    date(fromNow: true)
                    title
                    }
                    excerpt
                    id
                }
                }
            }`
    )
    return (
        <>
        <h2>Updates</h2>
        {blog.posts.map(post => (
            <article key={post.id}>
            <Link to={post.fields.slug}>
                <h3>{post.frontmatter.title}</h3>
            </Link>
            <small>
                {post.frontmatter.date}
            </small>
            <p>{post.excerpt} <Link to={post.fields.slug} style={{ fontStyle: 'italic' }}>(read more)</Link></p>
            </article>
        ))}
        </>
)}