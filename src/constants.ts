interface Social {
  name: string
  url: string
}

export const socials: { [key: string]: Social } = {
  instagram: {
    name: 'Instagram',
    url: 'https://www.instagram.com/th1i.bea/'
  },
  facebook: {
    name: 'facebook',
    url: ''
  },
  tiktok: {
    name: 'tiktok',
    url: ''
  }
}

export const email: string = ''
export const urls: { [key: string]: string } = {
  home: '/',
  about: '/about/',
  cars: '/cars/',
  motorcycles: '/motorcycles/',
  quote: '/quote/',
  404: '/404/',
}
