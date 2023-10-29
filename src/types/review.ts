type User = {
    name: string;
    avatarUrl: string;
}

export type Review = {
    id: string;
    isoDate: string;
    user: User;
    positive: string;
    negative: string;
    rating: number;
}

export type FormData = {
  rating: number;
  positive: string;
  negative: string;
}
