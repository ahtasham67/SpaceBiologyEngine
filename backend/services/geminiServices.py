import google.generativeai as genai
import os
from dotenv import load_dotenv
load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")


def generate_text(prompt: str) -> str:
    try:
        response = model.generate_content(
            prompt,
            generation_config=genai.types.GenerationConfig(
                max_output_tokens=4096,
                temperature=0.7,
                top_p=0.8,
            )
        )
        
        # Check if response has valid content
        if response.candidates and len(response.candidates) > 0:
            candidate = response.candidates[0]
            
            # Check finish reason
            if candidate.finish_reason == 1:  # STOP - successful completion
                return response.text
            elif candidate.finish_reason == 2:  # MAX_TOKENS
                return "Response was truncated due to token limit."
            elif candidate.finish_reason == 3:  # SAFETY
                return "Response was blocked due to safety filters."
            elif candidate.finish_reason == 4:  # RECITATION
                return "Response was blocked due to recitation concerns."
            else:
                return f"Response generation stopped unexpectedly. Reason: {candidate.finish_reason}"
        else:
            return "No response generated."
            
    except Exception as e:
        return f"Error generating text: {str(e)}"

def analyze_image(image_path: str, prompt: str = "Describe this image") -> str:
    """Analyze an image and generate text description using Gemini Vision"""
    try:
        # Create a vision model
        vision_model = genai.GenerativeModel('gemini-2.5-flash')
        
        # Read the image file
        with open(image_path, 'rb') as image_file:
            image_data = image_file.read()
        
        # Create image part
        image_part = {
            "mime_type": "image/jpeg",  # Adjust based on image type
            "data": image_data
        }
        
        response = vision_model.generate_content([prompt, image_part])
        
        # Check if response has valid content
        if response.candidates and len(response.candidates) > 0:
            candidate = response.candidates[0]
            if candidate.finish_reason == 1:  # STOP - successful completion
                return response.text
            else:
                return f"Image analysis failed. Reason: {candidate.finish_reason}"
        else:
            return "No response generated for image analysis."
            
    except Exception as e:
        return f"Error analyzing image: {str(e)}"

def generate_space_biology_content(organ: str, condition: str = "microgravity") -> str:
    """Generate space biology content for specific organs"""
    prompt = f"Explain the effects of {condition} on the human {organ} in space. Include physiological changes, risks, and adaptations."
    return generate_text(prompt)


def generate_with_system_prompt(system_prompt: str, user_prompt: str) -> str:
    """Generate text using a system prompt and user prompt"""
    try:
        response = model.generate_content(
            [system_prompt, user_prompt],
            generation_config=genai.types.GenerationConfig(
                max_output_tokens=4096,
                temperature=0.7,
                top_p=0.8,
            )
        )
        
        # Check if response has valid content
        if response.candidates and len(response.candidates) > 0:
            candidate = response.candidates[0]
            if candidate.finish_reason == 1:  # STOP - successful completion
                return response.text
            else:
                return f"Response generation stopped unexpectedly. Reason: {candidate.finish_reason}"
        else:
            return "No response generated."
            
    except Exception as e:
        return f"Error generating text: {str(e)}"