export default async function DocsSlug({params}:{params: {slug: string[]}}){
    const {slug} = await params;
    const slugLength = slug.length;
    console.log(slugLength);
    return(
        <div>
            <h1>Docs page</h1>
            <p>Slug: {slug.join('/')}</p>
             {
                slugLength===3? <div>Viewing docs for feature: {slug[0]} and concept: {slug[1]} and subconcept: {slug[2]}</div>:
                slugLength===2? <div>Viewing docs for feature: {slug[0]} and concept: {slug[1]}</div>:
                slugLength===1? <div>Viewing docs for feature: {slug[0]} </div>:
                null
             }
        </div>
    )
}