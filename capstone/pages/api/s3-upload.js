import { APIRoute } from 'next-s3-upload';

export default APIRoute.configure({
  async key(req, filename) {
    const user = await currentUser(req);
    return `users/${user.id}/${filename}`;
  },
});