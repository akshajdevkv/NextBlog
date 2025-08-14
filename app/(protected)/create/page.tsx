export default function CreatePage() {
    async function createPost(formData: FormData) {
        'use server'
        const title = formData.get('title') as string
        const content = formData.get('content') as string
        console.log(title, content)
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Create New Blog Post</h1>
          <p className="text-lg text-gray-600">Share your thoughts with the world</p>
        </div>
        
        <form className="space-y-8" action={createPost}>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-900 mb-3">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full px-6 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition-colors text-gray-900 text-lg"
              placeholder="Enter your blog post title..."
            />
          </div>
          
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-900 mb-3">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              rows={20}
              className="w-full px-6 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition-colors resize-vertical text-gray-900 leading-relaxed text-lg"
              placeholder="Write your blog post content here..."
            />
          </div>
          
          <div className="pt-8 flex justify-center">
            <button
              type="submit"
              className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-4 px-12 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 text-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
