'use server';

import * as auth from '@/auth';

async function signIn() {
    return auth.signIn('github');
}

async function signOut() {
    return auth.signOut();
}