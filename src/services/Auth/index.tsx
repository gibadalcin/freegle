interface Response {
  token: string;
  user: {
    pass: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'jsbkjvbvsjandjdblkvfmnvxjkdsbjanjsdblakmshsadgbajfsdbnj',
        user: {
          pass: '1234',
          email: 'gibadalcin@hotmail.com',
        },
      });
    }, 300);
  });
}
