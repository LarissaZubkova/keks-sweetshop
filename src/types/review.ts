type User = {
    name: string;
    avatarUrl: string;
}

export type LastReview = {
    id: string;
    isoDate: string;
    user: User;
    positive: string;
    negative: string;
    rating: number;
}
