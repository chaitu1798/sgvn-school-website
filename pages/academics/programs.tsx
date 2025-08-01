import Layout from '../../components/Layout'

type Program = {
  title: string
  description: string
  imageUrl: string
}

const programs: Program[] = [
  {
    title: 'Primary School',
    description: 'Grades 1–5: Building strong foundations in reading, math, and creativity.',
    imageUrl: 'https://source.unsplash.com/400x300/?kids,learning',
  },
  {
    title: 'Middle School',
    description: 'Grades 6–8: Enhancing critical thinking, STEM exposure, and personal development.',
    imageUrl: 'https://source.unsplash.com/400x300/?school,classroom',
  },
  {
    title: 'High School',
    description: 'Grades 9–12: Preparing students for higher education, careers, and responsible citizenship.',
    imageUrl: 'https://source.unsplash.com/400x300/?students,books',
  },
  {
    title: 'Extracurricular Activities',
    description: 'Arts, sports, music, and clubs for holistic student growth.',
    imageUrl: 'https://source.unsplash.com/400x300/?sports,arts',
  },
]

export default function Programs() {
  return (
    <Layout>
      <div className="py-10 px-4 md:px-8">
        <h1 className="text-4xl font-bold mb-6 text-blue-800">Academic Programs</h1>
        <p className="mb-10 text-gray-700">
          Explore our range of academic and co-curricular programs designed to nurture every student's potential.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={program.imageUrl}
                alt={program.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                  {program.title}
                </h2>
                <p className="text-gray-600">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
