import {useRouter} from 'next/router';

export default function SongPage() {
    const router = useRouter();
    const {id} = router.query;

    return (
        <div>
            {id}
        </div>
    )
}