import { container } from 'tsyringe';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import RedisCacheProvider from '@shared/container/providers/CacheProvider/implementations/RedisCacheProvider';

const providers = {
  redis: RedisCacheProvider,
};

container.registerInstance<ICacheProvider>(
  'CacheProvider',
  container.resolve(providers.redis),
);
