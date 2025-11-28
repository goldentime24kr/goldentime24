// app/page.tsx
'use client';

import { useState } from 'react';

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const regions = ['부산광역시', '서울특별시', '대구광역시'];
  const branches: { [key: string]: string[] } = {
    '부산광역시': ['사하점', '해운대점'],
    '서울특별시': ['강남점', '홍대점'],
    '대구광역시': ['동성로점'],
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(e.target.value);
    setSelectedBranch(''); // 지역 바뀌면 지점 초기화
  };

  const handleBranchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBranch(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6">골든타임 회원 페이지</h1>

      {/* 로그인 버튼 */}
      <div className="mb-8">
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded shadow"
          onClick={() => alert('카카오톡 로그인 연동 필요')}
        >
          로그인 (회원권 있는 회원)
        </button>
      </div>

      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">회원권 확인 / 신규 회원</h2>

        {/* 지역 선택 */}
        <label className="block mb-2 font-medium">광역시 선택</label>
        <select
          className="w-full mb-4 p-2 border rounded"
          value={selectedRegion}
          onChange={handleRegionChange}
        >
          <option value="">선택하세요</option>
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>

        {/* 지점 선택 */}
        {selectedRegion && (
          <>
            <label className="block mb-2 font-medium">지점 선택</label>
            <select
              className="w-full mb-4 p-2 border rounded"
              value={selectedBranch}
              onChange={handleBranchChange}
            >
              <option value="">선택하세요</option>
              {branches[selectedRegion].map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </>
        )}

        {/* 확인 버튼 */}
        {selectedBranch && (
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => alert(`${selectedBranch} 회원권 확인 페이지로 이동`)}
          >
            회원권 보기
          </button>
        )}
      </div>
    </div>
  );
}
