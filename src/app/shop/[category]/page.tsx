export default function Page({ params }: { params: { id: string } }) {
    return( <div className="h-[100vh]">details about {params.id}</div>
  )}