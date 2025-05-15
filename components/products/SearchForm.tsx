'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"


interface SearchFormProps {
  initialQuery: string;
  initialOrder: string;
}

export function SearchForm({ initialQuery, initialOrder }: SearchFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState(initialQuery);
  const [sort, setSort] = useState(initialOrder);

  // 버튼 클릭했을 경우 검색 결과 페이지로 이동
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();


    const SORT_BY = 'rating';
    const ORDER = sort;


    const params = new URLSearchParams(searchParams.toString());
    params.set('query', searchValue.trim());
    params.set('sort_by', SORT_BY);
    params.set('order', ORDER);

    router.push(`/products?${params.toString()}`);


  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex flex-col lg:flex-row justify-between items-center gap-2 w-full bg-gray-100 p-4 rounded-lg">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="검색어를 입력해주세요."
        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />


      <div className="flex flex-row gap-2">
        <Select defaultValue={initialOrder} onValueChange={setSort}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="별점" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="desc">별점 내림차순</SelectItem>
            <SelectItem value="asc">별점 오름차순</SelectItem>
          </SelectContent>
        </Select>

        <Button
          type="submit"
          variant="default"
        >
          결과 보기
        </Button>
      </div>
    </form>
  );
} 