# 📸 Image Setup Guide for Jindal Associates Website

## 🎯 **How to Add Images from PDF**

### **Step 1: Extract Images from PDF**

Since automated extraction had issues, use one of these methods:

#### **Method A: Manual Screenshots (Recommended)**

1. Open `pdf/Jindal_Associates.pdf` in any PDF viewer
2. Take screenshots of relevant sections:
   - **Page 1-2**: Company overview and team photos
   - **Page 3-6**: Project photos and progress shots
   - **Page 7-10**: Completed project images
   - **Page 11-12**: Portfolio and testimonial images

#### **Method B: Online PDF to Image Converter**

1. Go to [SmallPDF](https://smallpdf.com/pdf-to-jpg) or [ILovePDF](https://www.ilovepdf.com/pdf_to_jpg)
2. Upload your PDF
3. Convert to JPG/PNG
4. Download the images

### **Step 2: Organize Images**

Place your extracted images in the following folders:

```
public/images/
├── projects/           # Project-specific images
│   ├── gyan-construction-rishikesh.jpg
│   ├── micons-dehradun.jpg
│   ├── sawhney-buildwell-pune.jpg
│   ├── easy-housing-dehradun.jpg
│   ├── gyan-construction-hospital.jpg
│   └── gyan-construction-large.jpg
├── team/              # Team member photos
│   ├── deepak-jindal.jpg
│   ├── minal-jindal.jpg
│   ├── shivam-goyal.jpg
│   └── vikas-dabral.jpg
└── portfolio/         # Instagram/portfolio images
    ├── residential-dehradun.jpg
    ├── commercial-rishikesh.jpg
    ├── industrial-pune.jpg
    ├── resort-haridwar.jpg
    ├── interior-fitout.jpg
    └── site-progress.jpg
```

### **Step 3: Enable Images in Components**

#### **For Projects Component:**

1. Open `src/components/projects.tsx`
2. Find the commented Image components (around line 60-70)
3. Uncomment the Image components:

```jsx
{
  /* Uncomment when you have actual images */
}
<Image
  src={project.image}
  alt={project.client}
  fill
  className="object-cover"
/>;
```

#### **For Instagram Feed:**

1. Open `src/components/instagram-feed.tsx`
2. Find the commented Image components (around line 80-90)
3. Uncomment the Image components:

```jsx
{
  /* Uncomment when you have actual images */
}
<Image src={post.image} alt={post.title} fill className="object-cover" />;
```

### **Step 4: Image Requirements**

- **Format**: JPG or PNG
- **Size**: Recommended 800x600px or larger
- **Quality**: High quality, clear images
- **Naming**: Use descriptive names as shown above

### **Step 5: Test Your Images**

1. Save your images in the correct folders
2. Uncomment the Image components
3. Refresh your website at `http://localhost:3001`
4. Check that images display correctly

## 🎨 **Image Suggestions from PDF Content**

Based on the PDF content, look for these types of images:

### **Team Photos:**

- Deepak Jindal (Manager Projects)
- Minal Jindal (3D Visualizer)
- Shivam Goyal (Architectural Consultant)
- Vikas Dabral (Interior Engineer)

### **Project Photos:**

- **Gyan Construction**: Residential projects in Rishikesh/Dehradun
- **Micons**: Commercial buildings in Dehradun
- **Sawhney Buildwell**: Large industrial complex in Pune
- **Easy Housing**: Housing projects
- **Resort Development**: Hospitality projects
- **Interior Work**: Fit-out and renovation projects

### **Portfolio Images:**

- Construction site progress
- Completed buildings
- Interior designs
- 3D visualizations
- Project management activities

## 🚀 **Quick Start**

1. Extract 6-8 key images from the PDF
2. Save them with the suggested names
3. Place them in the appropriate folders
4. Uncomment the Image components
5. Refresh your website

Your website will instantly look more professional with real project images!
