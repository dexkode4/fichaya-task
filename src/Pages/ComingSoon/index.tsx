import React from 'react';
import PageLayout from '../../Components/PageLayout';

function ComingSoon({ match }: { match: { url: string } }) {
    return (
        <PageLayout>
            <h1>Coming soon</h1><span>{match.url}</span>
        </PageLayout>
    )
}

export default ComingSoon
