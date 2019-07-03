import { Post } from './classes/post';

export const POSTS: Post[] = [
// tslint:disable-next-line: max-line-length
  { title: 'Premier Post', content: 'Angular est une plateforme de développement qui permet de créer des applications web dynamiques et immersives', date: new Date(), likeDislike: 0 },
// tslint:disable-next-line: max-line-length
  { title: 'Deuxieme Post', content: 'Aux débuts du développement web, seul le HTML permet de créer des sites. Les sites web en 1990 ressemblent à des documents texte, car il n’existe pas vraiment d’autres possibilités. Ensuite, en 1998, le CSS arrive pour aider à créer des mises en page plus esthétiques. Finalement, à partir du début des années 2000, le JavaScript commence son règne sur le développement web, permettant des interactions entre l’utilisateur et la page.', date: new Date(), likeDislike: 0 },
// tslint:disable-next-line: max-line-length
  { title: 'Troisieme Post', content: 'le système AJAX (Asynchronous Javascript And XML) permet des interactions entre l’utilisateur et des backend HTTP ', date: new Date(), likeDislike: 0 }
];
