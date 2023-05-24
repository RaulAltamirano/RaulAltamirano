document.addEventListener("DOMContentLoaded", function() {
    generateSocialIcons();
  });
  
  function generateSocialIcons() {
    const socialIconsContainer = document.getElementById("socialIcons");
  
    const socialIcons = [
      {
        href: "https://www.linkedin.com/in/ra%C3%BAl-altamirano-lozano-954281247/",
        imgSrc: "https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white",
        alt: "LinkedIn"
      },
      {
        href: "#",
        imgSrc: "https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white",
        alt: "Twitter"
      },
      {
        href: "mailto:produtor.rulomania1998@gmail.com",
        imgSrc: "https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white",
        alt: "Gmail"
      }
    ];
  
    socialIcons.forEach(icon => {
      const link = createLinkElement(icon.href);
      const img = createImageElement(icon.imgSrc, icon.alt);
  
      link.appendChild(img);
      socialIconsContainer.appendChild(link);
    });
  }
  
  function createLinkElement(href) {
    const link = document.createElement("a");
    link.href = href;
  
    return link;
  }
  
  function createImageElement(src, alt) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
  
    return img;
  }
  