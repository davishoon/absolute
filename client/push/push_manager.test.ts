/**
 * Copyright (c) 2017 The Absolute Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {} from 'jest';
import absolute from '../absolute';

test('absolute.push.isRegistered()', async() => {
  expect(await absolute.push.isRegistered()).toBe(false);
});

test('absolute.push.register()', async() => {
  const registered: Promise<any> = await absolute.push.register('test_key')
  expect(registered).rejects.toBe(null);
});

test('absolute.push.unregister()', async() => {
  expect(await absolute.push.unregister()).toBe(false);
});
