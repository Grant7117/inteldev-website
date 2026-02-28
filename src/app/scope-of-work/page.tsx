import React from 'react';
import ScopeOfWork from '@/components/ScopeOfWork';
import Ticker from '@/components/Ticker';

export default function ScopeOfWorkPage() {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Ticker />

            <div style={{ paddingTop: '6rem' }}></div>

            <ScopeOfWork />

        </main>
    )
}
