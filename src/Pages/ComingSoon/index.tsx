import React from 'react';
import PageLayout from '../../Components/PageLayout';
import { Icomingsoon } from '../../interface';

function ComingSoon({ match }: Icomingsoon) {
    return (
        <PageLayout>
            <span>Coming soon</span>
            <h1>{match.url}</h1>
        </PageLayout>
    )
}

export default ComingSoon
