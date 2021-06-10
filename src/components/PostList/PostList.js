import Spinner from '../Spinner';
import BlogHeader from './BlogHeader/BlogHeader';
import PreContent from '../PreContent';
import Posts from './Posts';
import PostPreview from './PostPreview/PostPreview';

export default function PostList({ name, description, posts, commentsNumber }) {
  if (!posts) return <Spinner />;

  return (
    <main>
      <BlogHeader name={name} description={description} />
      <PreContent />
      <Posts>
        {posts.length === 0 ? <h2>No stories yet. 😔</h2> : posts.map((p) => <PostPreview commentsNumber = {commentsNumber} post={p} key={p.id} />)}
      </Posts>
    </main>
  );
}
