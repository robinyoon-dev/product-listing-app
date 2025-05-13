'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useState } from 'react';

interface SearchFormProps {
  initialQuery: string;
}

export function SearchForm({ initialQuery }: SearchFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState(initialQuery);
  
  // 버튼 클릭했을 경우 검색 결과 페이지로 이동
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // TODO: 검색어가 없을 경우 검색어를 입력하라는 안내 표시해야합니다.
    if (searchValue.trim() === "") {
      alert("검색어를 입력하세요.");
    } else {
      const params = new URLSearchParams(searchParams.toString());
      params.set('query', searchValue);
      params.set('page', '1'); // Reset to first page when searching
  
      router.push(`/products?${params.toString()}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="검색어를 입력해주세요."
        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        결과 보기
      </button>
    </form>
  );
} 