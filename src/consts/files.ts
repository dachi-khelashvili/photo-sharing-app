export const getData = () => {
  const temp = [];
  const templates = [
    'https://fastly.picsum.photos/id/507/600/600.jpg?hmac=rOqut4F9CmwnmdZhtV_76pQXBEG5Y1wibCCKzxb5luk',
    'https://fastly.picsum.photos/id/111/600/600.jpg?hmac=lcOMUfnTHx39V8ZXAD0efwM33vmYs4I70hQGDILdRqI',
    'https://fastly.picsum.photos/id/153/600/600.jpg?hmac=QestEq1QK7okR9gxUd8mRs3TEcVFz0gCtWU5S9OvwWo',
    'https://fastly.picsum.photos/id/522/600/600.jpg?hmac=hMsiSZIkns7dauzjEFb9aY8qUIOVK-FFDRvBha1ggkc',
    'https://fastly.picsum.photos/id/178/600/600.jpg?hmac=O8l7flEwbL_y3cym-o1MhuMzKIBl_3zAN0cGeyHFLn0',
    'https://fastly.picsum.photos/id/618/600/600.jpg?hmac=EgwQ4PrKNa8TpxDymJbZE-iWYp7OzkzmOLAPPwK2OGU',
    'https://fastly.picsum.photos/id/916/600/600.jpg?hmac=2SVGfuvjb7F1z6AhGa6yiIoK79honmvlSqvtHtTBt5g',
  ];
  for (let i = 0; i < 23; i++) {
    temp.push({
      photo: {
        path: templates[i % templates.length],
        uploader: 'Bruce',
        title: 'Cute Cat',
        status: 'public',
        description: 'Hello',
        tags: 'AI',
      },
      like: Math.ceil(Math.random() * 20),
    });
  }
  return temp;
};

export const PageSize = 9;
