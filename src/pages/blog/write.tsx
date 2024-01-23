import { yupResolver } from '@hookform/resolvers/yup'
import { addDoc, collection } from 'firebase/firestore'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import 'md-editor-rt/lib/style.css'
import { RingLoader } from 'react-spinners'
import * as Yup from 'yup'

import InputText from '@/components/inputs/InputText'
import Editor from '@/components/inputs/MdEditor'
import { firestore } from '@/config/firebase'
import { BlogPost } from '@/types'

const schema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  body: Yup.string().required('Body is required'),
})

const resolver = yupResolver(schema)

type PostInput = {
  title: string
  description: string
  body: string
}

const postsCollection = collection(firestore, 'posts')

const WritePage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm<PostInput>({
    resolver,
    defaultValues: {
      title: '',
      description: '',
      body: '',
    },
  })

  const router = useRouter()

  const handleSavePost = async (data: PostInput) => {
    const { title, description, body } = data

    const slug = title.toLowerCase().replace(/\s+/g, '-')

    const newPost: BlogPost = {
      title,
      date: new Date(),
      description,
      likes: 0,
      views: 0,
      slug,
      tags: ['default'],
      categories: ['default'],
      author: 'PH Oliveira',
      body,
      timeToRead: Math.ceil(body.split(' ').length / 200),
    }

    try {
      await addDoc(postsCollection, newPost)
      router.push(`/blog/${newPost.slug}`)
    } catch (error) {
      console.error('Error saving the post:', error)
    }
  }

  return (
    <form
      className='w-full text-2xl p-24 flex flex-col gap-4'
      noValidate
      onSubmit={handleSubmit(handleSavePost)}
    >
      <h1 className='text-gray-800 mb-4 font-bold'>Write a New Post</h1>
      <InputText
        label='Title'
        register={register}
        name='title'
        containError={!!errors.title}
        isRequired
        errorMessage={errors.title?.message}
      />
      <InputText
        label='Description'
        register={register}
        name='description'
        containError={!!errors.description}
        isRequired
        errorMessage={errors.description?.message}
      />

      <Editor control={control} containError={!!errors.body} name='body' label='Body' />
      <button
        type='submit'
        className='btn border-none p-0 px-4 rounded-lg shadow-lg mt-6'
        disabled={isSubmitting}
      >
        {isSubmitting ? <RingLoader size={24} color='#000000' /> : 'Post'}
      </button>
    </form>
  )
}

export default WritePage
