# MSB Library — Kütüphane Otomasyon Ara Yüzü

Yazar: Ferhat Bayutmuş (GitHub: frhtbytms)

Bu repo, eğitim amaçlı bir kütüphane ön yüzü örneğidir. Basit sayfalar, bir giriş formu ve demo amaçlı client-side (sessionStorage) oturum yönetimi içerir.

Öne çıkanlar
- Basit login demo (client-side): `js/auth.js`
- Rol tabanlı yönlendirme (admin/member) — demo olarak email'e göre belirlenir
- Profil sayfası (görünen isim değiştirme — demo)

Canlı olarak denemek (yerel)

Gereksinimler:
- Python 3 (lokal basit HTTP sunucusu için)
- Bir web tarayıcı (Chrome/Edge/Firefox)

Çalıştırma (PowerShell örneği):

```powershell
# Proje klasörüne gidin
Set-Location 'C:\Users\ferha\OneDrive\Masaüstü\New folder (2)\mylibrary'

# Basit HTTP sunucusu başlat (tarayıcıda http://localhost:8000)
python -m http.server 8000
```

Tarayıcıda açın: `http://localhost:8000/login.html`

Demo giriş bilgileri
- Parola (demo): `1234` (tüm kullanıcılar için)
- Yönetici olmak için e-posta `admin@...` ile başlayabilir (ör: `admin@example.com`). Diğer e-postalar üye olarak yönlendirilir.

Dosya Özet
- `index.html` — Anasayfa
- `login.html` — Giriş formu
- `admin.html` — Admin paneli (role korumalı, demo)
- `profile.html` — Profil ayarları (görünen isim değiştirme, demo)
- `css/genel.css` — Stil
- `js/genel.js`, `js/auth.js` — JS yardımcıları ve auth demo

GitHub
- Repo: https://github.com/frhtbytms/mylibraryguncel

Güvenlik notu
- Bu projedeki kimlik doğrulama tamamen client-side bir demodur. Gerçek uygulamalarda kimlik doğrulama, parola saklama ve yetkilendirme sunucu tarafında güvenli biçimde yapılmalıdır.

Katkıda bulunma
- İsterseniz README'ye daha fazla kullanım detayı, lisans ya da bir CONTRIBUTING dosyası ekleyebilirim.
# MSB Library — Kütüphane Otomasyon Ara Yüzü

Yazar: Ferhat Bayutmuş (GitHub: frhtbytms)

Bu proje, dersinizde geliştirilen "kütüphane web otomasyon sistemi" için basit ve temiz bir ön yüz (frontend) örneğidir. İçinde anasayfa, hakkımızda, iletişim, giriş formu ve mock admin paneli sayfaları bulunur.

## Hızlı Başlangıç (Quick start)

Gereksinimler:
- Python 3 (lokal basit HTTP sunucusu için)
- Git (sürüm kontrolü için)

Yerel olarak çalıştırmak için (PowerShell veya benzeri terminalde proje kökünde):

```powershell
# Proje klasörüne gidin
cd "C:\Users\<kullanici>\OneDrive\Masaüstü\msblibrary"

# Basit HTTP sunucusu başlat (tarayıcıda http://localhost:8000)
python -m http.server 8000
```

Tarayıcıda açın: `http://localhost:8000`

Not: Doğrudan dosyayı çift tıklayıp açmak da çalışır, fakat bazı tarayıcılarda relative path veya güvenlik kısıtları nedeniyle CSS/JS yüklenmeyebilir — bu yüzden `http.server` ile servis etmek önerilir.

## Dosya Yapısı (özet)

- `index.html` — Anasayfa
- `about.html` — Hakkımızda / Misyon / Vizyon
- `contact.html` — İletişim formu (UI-only)
- `login.html` — Giriş formu (UI-only)
- `admin.html` — Mock admin paneli
- `css/genel.css` — Ortak stil dosyası
- `js/genel.js` — Küçük yardımcı JS dosyası
- `logo.png`, `favicon.ico` — Placeholder görseller


