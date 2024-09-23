# 538-bias-marker
Adds additional bias/reliability markers to 538's polling tables. Shows bias of both pollsters and sponsors while highlighting the most reliable pollsters.

The bias and reliability ratings of pollsters are grabbed on the fly, meaning there is no need to update the script for the latest ratings.

# Setup
**Step 1:** Download a userscript manager extension if you do not have one already (recommended: [Violentmonkey](https://violentmonkey.github.io/get-it/)).

**Step 2:** Open the extension and click on "Create a new script".

![image](https://github.com/user-attachments/assets/27e35ef9-a678-42c6-8ca3-afe0f099c621)

Clear any existing text in the new script, then copy the code of the userscript from [here](https://github.com/seppukusoft/538-bias-marker/blob/main/538-bias-marker.js) and paste it into the new script.

**Step 3:** Click "Save and close" in the top right corner to complete the setup. The script will automatically run whenever you next visit a 538 polling page.

![image](https://github.com/user-attachments/assets/7c485723-5ee6-41d9-8bf1-05502a9e021c)

# Legend
**All added markers have a black border to distinguish them from 538's own.**

![image](https://github.com/user-attachments/assets/a3d47add-c0c6-48ee-9c10-d6530796fb81)

**Double Purple:** The most reliable pollsters, generally the top 50 by 538's ratings (2.5 stars or above, no less than 5 transparency score).

![image](https://github.com/user-attachments/assets/6e090455-8f7e-4f50-841a-63af34dedf14)

**Yellow:** Pollster is generally considered unreliable, even highly so; it has either no partisan lean or an indeterminate lean.

![image](https://github.com/user-attachments/assets/017c47fb-d864-49ae-8e89-94e6d4796e1c)

**Light Blue:** Democratic-leaning pollster. Generally reliable but may have slightly skewed results.

![image](https://github.com/user-attachments/assets/6a835136-b36f-4a68-8eb6-dde1f724229f)

**Pink:** Republican-leaning pollster. Generally reliable but may have slightly skewed results.

![image](https://github.com/user-attachments/assets/8259e854-6fc1-41e3-be5a-0fa7adb65062) 

**Dark Blue:** Partisan Democratic pollster. Results often favor the Democratic Party and its candidates; pollsters are often unreliable.

![image](https://github.com/user-attachments/assets/0ef26276-3c73-4c2e-9ef2-453b869819dc)

**Dark Red:** Partisan Republican pollster. Results often favor the Republican Party and its candidates; pollsters are often unreliable.

# Example

![image](https://github.com/user-attachments/assets/f8934bf7-9445-4eee-b640-cc71ca32552b)


# Disclaimer
The script developer determines partisan leanings and reliability through independent research and assumes no responsibility for incorrect or outdated information.
