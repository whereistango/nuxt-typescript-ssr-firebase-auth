import { User } from 'firebase'
import { AnonymousUserImage, ProviderType, StoredUser } from '~/types'

export const getStoredUser = (firebaseUser: User | null): StoredUser | null => {
  return firebaseUser
    ? {
      name: firebaseUser.displayName as string,
      email: firebaseUser.email as string,
      profilePicture: {
        src: firebaseUser.photoURL || AnonymousUserImage.src,
        alt: firebaseUser.displayName ? 'Picture of ' + firebaseUser.displayName : AnonymousUserImage.alt
      },
      userId: firebaseUser.uid,
      verified: firebaseUser.emailVerified,
      providers: firebaseUser.providerData?.map(value => value?.providerId) as string[]
    } : null
};

export const getProviderOption = (provider: ProviderType) => {
  return {
    provider: provider.replace('.com', '')
  }
}
