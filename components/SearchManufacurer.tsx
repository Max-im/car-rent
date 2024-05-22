"use client";

import { Fragment, useState } from 'react';
import { SearchManufacturerProps } from '@/types';
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from '@headlessui/react';
import Image from 'next/image';
import { manufacturers } from '@/constants';

export default function SearchManufacurer({ manufacturer, setManufacturer }: SearchManufacturerProps) {
  const [query, setQuery] = useState('');

  const clean = (str: string) => {
    return str.toLocaleLowerCase().replace(/\s+/g, '')
  }

  const cleanQuery = clean(query);


  const filtredManufactures = query === '' ? manufacturers : manufacturers.filter(m => clean(m).includes(cleanQuery));

  return (
    <div className='search-manufacturer'>
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="w-full relative">
          <ComboboxButton className="absolute top-[14px]">
            <Image src="/car-logo.svg" alt="car logo" width="20" height="20" className='ml-4' />
          </ComboboxButton>
          <ComboboxInput
            className="search-manufacturer__input"
            placeholder='Volkswagen'
            displayValue={(manufacturer: string) => manufacturer}
            onChange={e => setQuery(e.target.value)}
          />
          <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom="opacity-100" leaveTo="opacity-0" afterLeave={() => setQuery('')}>
            <ComboboxOptions>
              {filtredManufactures.length === 0 && query !== '' ? (
                <ComboboxOption value={query} className="search-manufacturer__option">
                  Create &quot;{query}&quot;
                </ComboboxOption>
              ) : (
                filtredManufactures.map(manufacture => (
                  <ComboboxOption
                  key={manufacture}
                  className={({active}) => `relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                  value={manufacture}>
                    {({selected, active}) => (
                      <>
                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal' }`}>{manufacture}</span>
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}></span>
                        ) : null}
                      </>
                    )}
                  </ComboboxOption>
                ))
              )}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}
