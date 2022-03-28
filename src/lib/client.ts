import { PrismaClient } from '@prisma/client';

// export default new PrismaClient();
const client = new PrismaClient();

client.user.create({
  data: {
    email: 'kjw@naver.com',
    name: 'Junwoo',
  },
});
