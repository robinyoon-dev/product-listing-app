
export const getRandomViewMode = (): 'list' | 'grid' => {
    const VIEW_MODE_KEY = 'viewMode';
    const EXPIRATION_KEY = 'expirationTime';
  
    const now = new Date().getTime();
    const storedViewMode = localStorage.getItem(VIEW_MODE_KEY);
    const storedExpiration = localStorage.getItem(EXPIRATION_KEY);
  
    if (storedViewMode && storedExpiration && Number(storedExpiration) > now) {
      // 유효기간이 남아있으면 기존 View 모드를 반환
      return storedViewMode as 'list' | 'grid';
    }
  
    // 50% 확률로 랜덤 결정
    const newViewMode = Math.random() > 0.5 ? 'list' : 'grid';
    const expirationTime = now + 24 * 60 * 60 * 1000; // 24시간 (ms 단위)
  

    localStorage.setItem(VIEW_MODE_KEY, newViewMode);
    localStorage.setItem(EXPIRATION_KEY, expirationTime.toString());
  
    return newViewMode;
  };
  