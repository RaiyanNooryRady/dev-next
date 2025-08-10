export default async function DocsSlug({params}:{params: {slug: string[]}}){
    const {slug} = await params;
    return(
        <div>
            <h1>Docs page</h1>
            <p>Slug: {slug.join('/')}</p>
        </div>
    )
}