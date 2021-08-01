import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import BlogPosts from '@components/BlogPosts'

export default function Blog({ data }) {
    return (
        <Layout>
            <Seo title="Blog" />

            <PageHeader
                title="Blog"
            />

            <PageContent>
            <BlogPosts />
            </PageContent>
        </Layout>
)}