import Navigation from '@/components/Navigation';

export default function Publications() {
  const publications = [
    {
      id: 1,
      title: "Automating Map-Making through Enhanced Geographic Information Extraction Using Retrieval-Augmented Generation with Open-source Large Language Models",
      status: "Currently Drafting",
      year: "2025"
    },
    {
      id: 2,
      title: "Comparative Analysis of BERT and GPT for Classifying Conflict News with Sudan Conflict as an Example",
      status: "Preparing to Submit",
      year: "2025"
    },
    {
      id: 3,
      title: "Optimizing context-based location extraction by tuning open-source LLMs with RAG",
      journal: "IJDE International Journal of Digital Earth",
      status: "Under Review",
      year: "2025"
    }
  ];

  return (
    <main className="min-h-screen py-8">
      <Navigation />
      
      <div className="px-4">
        <div className="max-w-4xl mx-auto">
          <section>
            <h1 className="text-4xl mb-6">Publications</h1>
            <div className="space-y-8">
              {publications.map(pub => (
                <div key={pub.id} className="border-b pb-6">
                  <h3 className="text-xl font-medium mb-2">
                    {pub.title}
                  </h3>
                  <div className="flex flex-col space-y-1">
                    {pub.journal && (
                      <p className="text-gray-600 italic">{pub.journal}, {pub.year}</p>
                    )}
                    <p className="text-[#8651d6]">{pub.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 