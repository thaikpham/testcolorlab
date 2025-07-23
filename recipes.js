const recipesData = [
    {
        "id": "scl-001",
        "name": { "vi": "Mojave Sun", "en": "Mojave Sun" },
        "description": { "vi": "Một phong cách hoài niệm, ngập tràn ánh nắng, bao phủ các khung cảnh trong ánh sáng ấm áp của giờ vàng. Hoàn hảo cho du lịch và đời sống, nó tái tạo màu vàng đậm và xanh dương sâu, gợi lên cảm giác về một chuyến đi mùa hè bất tận.", "en": "Một phong cách hoài niệm, ngập tràn ánh nắng, bao phủ các khung cảnh trong ánh sáng ấm áp của giờ vàng. Hoàn hảo cho du lịch và đời sống, nó tái tạo màu vàng đậm và xanh dương sâu, gợi lên cảm giác về một chuyến đi mùa hè bất tận." },
        "type": "color",
        "contrast": "normal",
        "saturation": "normal",
        "tags": ["nostalgic", "sun-drenched", "warm", "travel", "lifestyle", "summer", "golden-hour"],
        "whiteBalance": "8500K, B3-M1.75",
        "settings": { "Black level": "-5", "Gamma": "Movie", "Black Gamma": "Wide +7", "Knee": "Manual 75% +4", "Color Mode": "S-Gamut3", "Saturation": "+32", "Color Phase": "+6" },
        "colorDepth": { "R": "-2", "G": "0", "B": "+5", "C": "+5", "M": "0", "Y": "+4" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#FFD700", // Yellowish
        "coords": { "x": 6, "y": 7 } // Example coordinates for chart
    },
    {
        "id": "scl-002",
        "name": { "vi": "Kyoto Jade", "en": "Kyoto Jade" },
        "description": { "vi": "Một bảng màu thanh tĩnh và tinh tế được định hình bởi các tông màu xanh ngọc bích đậm và màu da dịu. Lý tưởng cho chân dung trầm tư, nhiếp ảnh đường phố và phong cảnh, tạo ra một không khí yên bình, tựa như tranh vẽ.", "en": "Một bảng màu thanh tĩnh và tinh tế được định hình bởi các tông màu xanh ngọc bích đậm và màu da dịu. Lý tưởng cho chân dung trầm tư, nhiếp ảnh đường phố và phong cảnh, tạo ra một không khí yên bình, tựa như tranh vẽ." },
        "type": "color",
        "contrast": "normal",
        "saturation": "normal",
        "tags": ["serene", "subtle", "portrait", "street-photography", "landscape", "peaceful", "painterly"],
        "whiteBalance": "3700K, A7-M0.5",
        "settings": { "Black level": "0", "Gamma": "Movie", "Black Gamma": "Wide +7", "Knee": "Manual 80% +4", "Color Mode": "Still", "Saturation": "+11", "Color Phase": "-3" },
        "colorDepth": { "R": "-4", "G": "+7", "B": "-3", "C": "-3", "M": "-5", "Y": "-3" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#66CDAA", // Jade Green
        "coords": { "x": -4, "y": 3 }
    },
    {
        "id": "scl-003",
        "name": { "vi": "Caspian Blue", "en": "Caspian Blue" },
        "description": { "vi": "Một cấu hình điện ảnh, tông lạnh với sắc xanh dương đặc trưng và vùng tối sâu, đậm. Nó mang lại chất lượng tâm trạng, đầy không khí cho hình ảnh, hoàn hảo cho cảnh đêm đô thị, chân dung kịch tính và kể chuyện.", "en": "Một cấu hình điện ảnh, tông lạnh với sắc xanh dương đặc trưng và vùng tối sâu, đậm. Nó mang lại chất lượng tâm trạng, đầy không khí cho hình ảnh, hoàn hảo cho cảnh đêm đô thị, chân dung kịch tính và kể chuyện." },
        "type": "color",
        "contrast": "high",
        "saturation": "normal",
        "tags": ["cinematic", "cool-tone", "deep-blues", "moody", "atmospheric", "urban-night", "dramatic-portrait", "storytelling"],
        "whiteBalance": "8000K, B2-M2",
        "settings": { "Black level": "-15", "Gamma": "Cine3", "Black Gamma": "Wide +7", "Knee": "Manual 85% +4", "Color Mode": "S-Gamut3.Cine", "Saturation": "+20", "Color Phase": "+7" },
        "colorDepth": { "R": "-5", "G": "-1", "B": "+3", "C": "+4", "M": "+5", "Y": "+2" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#4682B4", // Steel Blue
        "coords": { "x": -8, "y": 5 }
    },
    {
        "id": "scl-004",
        "name": { "vi": "Tuscan Ochre", "en": "Tuscan Ochre" },
        "description": { "vi": "Một phong cách rực rỡ, độ bão hòa cao với các tông màu đỏ đất và vàng đất ấm áp. Nó mang lại một cường độ táo bạo, cháy nắng cho hình ảnh, gợi nhớ đến nhiếp ảnh du lịch châu Âu cổ điển.", "en": "Một phong cách rực rỡ, độ bão hòa cao với các tông màu đỏ đất và vàng đất ấm áp. Nó mang lại một cường độ táo bạo, cháy nắng cho hình ảnh, gợi nhớ đến nhiếp ảnh du lịch châu Âu cổ điển." },
        "type": "color",
        "contrast": "normal",
        "saturation": "high",
        "tags": ["vibrant", "high-saturation", "earthy-reds", "warm-yellows", "bold", "sun-baked", "classic-european-travel"],
        "whiteBalance": "5000K, A2-M1",
        "settings": { "Black level": "+6", "Gamma": "Still", "Black Gamma": "Wide -7", "Knee": "Manual 75% +4", "Color Mode": "S-Gamut3.Cine", "Saturation": "+25", "Color Phase": "+2" },
        "colorDepth": { "R": "-3", "G": "+7", "B": "+5", "C": "+5", "M": "+5", "Y": "+1" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#CD853F", // Peru
        "coords": { "x": 7, "y": 8 }
    },
    {
        "id": "scl-005",
        "name": { "vi": "Somerset Meadow", "en": "Somerset Meadow" },
        "description": { "vi": "Một bảng màu nhẹ nhàng, tựa màu pastel với độ tương phản mềm và độ bão hòa thấp. Nó tái tạo tông màu da một cách đẹp đẽ và mang lại cho phong cảnh một chất lượng mơ màng, thanh tao, hoàn hảo cho chân dung lãng mạn và nghệ thuật.", "en": "Một bảng màu nhẹ nhàng, tựa màu pastel với độ tương phản mềm và độ bão hòa thấp. Nó tái tạo tông màu da một cách đẹp đẽ và mang lại cho phong cảnh một chất lượng mơ màng, thanh tao, hoàn hảo cho chân dung lãng mạn và nghệ thuật." },
        "type": "color",
        "contrast": "soft",
        "saturation": "low",
        "tags": ["pastel", "soft-contrast", "low-saturation", "dreamy", "ethereal", "romantic-portrait", "fine-art"],
        "whiteBalance": "4200K, A7-M1",
        "settings": { "Black level": "-10", "Gamma": "Movie", "Black Gamma": "Middle -7", "Knee": "Manual 75% +4", "Color Mode": "Still", "Saturation": "+7", "Color Phase": "+3" },
        "colorDepth": { "R": "-3", "G": "+7", "B": "-3", "C": "-3", "M": "-5", "Y": "+4" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#B0E0E6", // Powder Blue
        "coords": { "x": -2, "y": -5 }
    },
    {
        "id": "scl-006",
        "name": { "vi": "Faded Canvas", "en": "Faded Canvas" },
        "description": { "vi": "Một phong cách được cách điệu hóa với vùng đen được nâng sáng mạnh và màu sắc dịu, tạo ra một hiệu ứng mờ, mềm mại. Nó gợi lên cảm giác hoài niệm và lý tưởng cho nhiếp ảnh thời trang, biên tập và đời sống hướng đến cảm giác cổ điển-hiện đại.", "en": "Một phong cách được cách điệu hóa với vùng đen được nâng sáng mạnh và màu sắc dịu, tạo ra một hiệu ứng mờ, mềm mại. Nó gợi lên cảm giác hoài niệm và lý tưởng cho nhiếp ảnh thời trang, biên tập và đời sống hướng đến cảm giác cổ điển-hiện đại." },
        "type": "color",
        "contrast": "normal",
        "saturation": "muted",
        "tags": ["stylized", "lifted-blacks", "soft-colors", "hazy", "nostalgic", "fashion", "editorial", "lifestyle", "vintage-modern"],
        "whiteBalance": "3600K, A7-G1",
        "settings": { "Black level": "+11", "Gamma": "Movie", "Black Gamma": "Narrow -7", "Knee": "Manual 85% +4", "Color Mode": "Still", "Saturation": "+11", "Color Phase": "-4" },
        "colorDepth": { "R": "-3", "G": "+7", "B": "-3", "C": "+2", "M": "+5", "Y": "+2" },
        "detailSettings": { "Level": "-7" },
        "personalityColor": "#D2B48C", // Tan
        "coords": { "x": 0, "y": -7 }
    },
    {
        "id": "scl-007",
        "name": { "vi": "Dynachrome '75", "en": "Dynachrome '75" },
        "description": { "vi": "Một cấu hình tương phản cao, đầy tâm trạng với màu đen sâu và sự dịch chuyển màu sắc lạnh, đầy kịch tính. Nó nhấn mạnh kết cấu và hình khối, tạo ra một phong cách đồ họa mạnh mẽ gợi nhớ đến phim dương bản tài liệu cổ điển.", "en": "Một cấu hình tương phản cao, đầy tâm trạng với màu đen sâu và sự dịch chuyển màu sắc lạnh, đầy kịch tính. Nó nhấn mạnh kết cấu và hình khối, tạo ra một phong cách đồ họa mạnh mẽ gợi nhớ đến phim dương bản tài liệu cổ điển." },
        "type": "color",
        "contrast": "high",
        "saturation": "normal",
        "tags": ["high-contrast", "moody", "deep-blacks", "cool-color-shift", "graphic", "classic-slide-film"],
        "whiteBalance": "4700K, A7-G0.5",
        "settings": { "Black level": "-15", "Gamma": "Cine1", "Black Gamma": "Wide -7", "Knee": "Manual 82.5% +4", "Color Mode": "S-Cinetone", "Saturation": "+10", "Color Phase": "+2" },
        "colorDepth": { "R": "+2", "G": "+7", "B": "-7", "C": "-6", "M": "+3", "Y": "+3" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#8B0000", // Dark Red
        "coords": { "x": -8, "y": 2 }
    },
    {
        "id": "scl-008",
        "name": { "vi": "Modern Classic", "en": "Modern Classic" },
        "description": { "vi": "Một phong cách trong trẻo, sống động và đương đại được xây dựng trên khoa học màu sắc hiện đại. Nó mang lại màu sắc phong phú, dễ chịu với sự chuyển tông mượt mà, là một lựa chọn linh hoạt cho việc chụp ảnh hàng ngày, từ chân dung đến sản phẩm.", "en": "Một phong cách trong trẻo, sống động và đương đại được xây dựng trên khoa học màu sắc hiện đại. Nó mang lại màu sắc phong phú, dễ chịu với sự chuyển tông mượt mà, là một lựa chọn linh hoạt cho việc chụp ảnh hàng ngày, từ chân dung đến sản phẩm." },
        "type": "color",
        "contrast": "normal",
        "saturation": "normal",
        "tags": ["clean", "vibrant", "contemporary", "modern-color-science", "rich-colors", "smooth-tonal-transitions", "versatile", "everyday", "portrait", "product"],
        "whiteBalance": "4000K, A7-M2",
        "settings": { "Black level": "+6", "Gamma": "S-Cinetone", "Black Gamma": "Narrow -7", "Knee": "Auto", "Color Mode": "S-Cinetone", "Saturation": "+14", "Color Phase": "-3" },
        "colorDepth": { "R": "0", "G": "+7", "B": "+5", "C": "-2", "M": "+3", "Y": "+2" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#4682B4", // Steel Blue
        "coords": { "x": 0, "y": 4 }
    },
    {
        "id": "scl-009",
        "name": { "vi": "Urban Teal", "en": "Urban Teal" },
        "description": { "vi": "Một cấu hình màu dịu, độ bão hòa thấp với sắc xanh mòng két (cyan-teal) đặc trưng ở vùng tối và trung bình. Nó tạo ra một tâm trạng tinh tế, nhẹ nhàng và hơi u buồn, hoàn hảo cho nhiếp ảnh đường phố và khám phá đô thị.", "en": "Một cấu hình màu dịu, độ bão hòa thấp với sắc xanh mòng két (cyan-teal) đặc trưng ở vùng tối và trung bình. Nó tạo ra một tâm trạng tinh tế, nhẹ nhàng và hơi u buồn, hoàn hảo cho nhiếp ảnh đường phố và khám phá đô thị." },
        "type": "color",
        "contrast": "normal",
        "saturation": "low",
        "tags": ["muted-color", "low-saturation", "cyan-teal", "subtle", "gentle", "melancholy", "street-photography", "urban-exploration"],
        "whiteBalance": "4000K, A7-M0.5",
        "settings": { "Black level": "-7", "Gamma": "Still", "Black Gamma": "Middle -7", "Knee": "Manual 75% +4", "Color Mode": "Still", "Saturation": "-5", "Color Phase": "+2" },
        "colorDepth": { "R": "-4", "G": "+7", "B": "+2", "C": "+3", "M": "-6", "Y": "-1" },
        "detailSettings": { "Level": "-7" },
        "personalityColor": "#008080", // Teal
        "coords": { "x": -5, "y": -3 }
    },
    {
        "id": "scl-010",
        "name": { "vi": "Cinema Verde", "en": "Cinema Verde" },
        "description": { "vi": "Một phong cách điện ảnh với độ bão hòa rất thấp và một chút sắc xanh lá tinh tế, được thiết kế để mô phỏng phim điện ảnh. Nó cung cấp một nền phẳng, trung tính, lý tưởng cho các cảnh quay đòi hỏi cảm giác mất bão hòa, đầy không khí.", "en": "Một phong cách điện ảnh với độ bão hòa rất thấp và một chút sắc xanh lá tinh tế, được thiết kế để mô phỏng phim điện ảnh. Nó cung cấp một nền phẳng, trung tính, lý tưởng cho các cảnh quay đòi hỏi cảm giác mất bão hòa, đầy không khí." },
        "type": "color",
        "contrast": "normal",
        "saturation": "very-low",
        "tags": ["cinematic", "very-low-saturation", "subtle-green-tint", "film-emulation", "flat", "neutral", "desaturated", "atmospheric"],
        "whiteBalance": "4000K, A7-M0.25",
        "settings": { "Black level": "+7", "Gamma": "Movie", "Black Gamma": "Wide -5", "Knee": "Manual 75% +4", "Color Mode": "Still", "Saturation": "-5", "Color Phase": "+1" },
        "colorDepth": { "R": "-3", "G": "+7", "B": "-2", "C": "+6", "M": "+4", "Y": "+2" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#3CB371", // Medium Sea Green
        "coords": { "x": 2, "y": -6 }
    },
    {
        "id": "scl-011",
        "name": { "vi": "Midnight Halogen", "en": "Midnight Halogen" },
        "description": { "vi": "Một công thức chuyên dụng cho ban đêm, biến đổi ánh đèn nhân tạo của thành phố thành các màu xanh dương và xanh mòng két rực rỡ, trong khi vẫn kiểm soát tốt vùng sáng. Nó tạo ra một thẩm mỹ tương lai, lấy cảm hứng từ cyberpunk.", "en": "Một công thức chuyên dụng cho ban đêm, biến đổi ánh đèn nhân tạo của thành phố thành các màu xanh dương và xanh mòng két rực rỡ, trong khi vẫn kiểm soát tốt vùng sáng. Nó tạo ra một thẩm mỹ tương lai, lấy cảm hứng từ cyberpunk." },
        "type": "color",
        "contrast": "normal",
        "saturation": "normal",
        "tags": ["night-specific", "city-lights", "vibrant-blues", "cyan-teal", "highlight-control", "futuristic", "cyberpunk"],
        "whiteBalance": "2700K, A7-M1.25",
        "settings": { "Black level": "+3", "Gamma": "Movie", "Black Gamma": "Wide +7", "Knee": "Auto", "Color Mode": "Still", "Saturation": "+2", "Color Phase": "+5" },
        "colorDepth": { "R": "-5", "G": "-7", "B": "-7", "C": "+3", "M": "-7", "Y": "-5" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#4169E1", // Royal Blue
        "coords": { "x": -7, "y": 0 }
    },
    {
        "id": "scl-012",
        "name": { "vi": "Amber Glow", "en": "Amber Glow" },
        "description": { "vi": "Một cấu hình ấm áp, nhẹ nhàng và hoài niệm với sắc hổ phách mềm mại. Nó xuất sắc trong việc tạo ra cảm giác ấm áp và thân mật, hoàn hảo cho chân dung giờ vàng, ảnh gia đình và các cảnh quay mang hơi hướng cổ điển.", "en": "Một cấu hình ấm áp, nhẹ nhàng và hoài niệm với sắc hổ phách mềm mại. Nó xuất sắc trong việc tạo ra cảm giác ấm áp và thân mật, hoàn hảo cho chân dung giờ vàng, ảnh gia đình và các cảnh quay mang hơi hướng cổ điển." },
        "type": "color",
        "contrast": "normal",
        "saturation": "normal",
        "tags": ["warm", "soft", "nostalgic", "amber-tint", "intimate", "golden-hour-portrait", "family-photos", "vintage-inspired"],
        "whiteBalance": "4300K, A7-M0.25",
        "settings": { "Black level": "+2", "Gamma": "Movie", "Black Gamma": "Middle +2", "Knee": "Manual 75% +4", "Color Mode": "Still", "Saturation": "+3", "Color Phase": "+1" },
        "colorDepth": { "R": "+1", "G": "+7", "B": "+2", "C": "+2", "M": "+4", "Y": "+2" },
        "detailSettings": { "Level": "-7" },
        "personalityColor": "#FFBF00", // Amber
        "coords": { "x": 4, "y": -2 }
    },
    {
        "id": "scl-013",
        "name": { "vi": "Flatiron Mist", "en": "Flatiron Mist" },
        "description": { "vi": "Một cấu hình cực kỳ linh hoạt, có độ tương phản thấp, sử dụng gamma S-Log để tối đa hóa dải tần nhạy sáng. Nó tạo ra một hình ảnh phẳng, mềm mại với màu sắc phong phú, hoàn hảo cho điều kiện ánh sáng gắt hoặc làm nền tảng vững chắc cho việc hậu kỳ.", "en": "Một cấu hình cực kỳ linh hoạt, có độ tương phản thấp, sử dụng gamma S-Log để tối đa hóa dải tần nhạy sáng. Nó tạo ra một hình ảnh phẳng, mềm mại với màu sắc phong phú, hoàn hảo cho điều kiện ánh sáng gắt hoặc làm nền tảng vững chắc cho việc hậu kỳ." },
        "type": "color",
        "contrast": "low",
        "saturation": "normal",
        "tags": ["versatile", "low-contrast", "s-log", "maximized-dynamic-range", "flat-image", "soft", "rich-colors", "harsh-lighting", "post-production"],
        "whiteBalance": "4500K, A7-M1",
        "settings": { "Black level": "-15", "Gamma": "S-Log2", "Black Gamma": "Middle -7", "Knee": "Manual 75% +5", "Color Mode": "Still", "Saturation": "+20", "Color Phase": "+3" },
        "colorDepth": { "R": "+3", "G": "+5", "B": "+5", "C": "+7", "M": "+7", "Y": "-3" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#A9A9A9", // Dark Gray
        "coords": { "x": -5, "y": 0 }
    },
    {
        "id": "scl-014",
        "name": { "vi": "Magenta Bloom", "en": "Magenta Bloom" },
        "description": { "vi": "Một phong cách sống động, mạnh mẽ với tông màu magenta đặc trưng, mô phỏng loại phim dương bản nổi tiếng. Lý tưởng cho phong cảnh và thiên nhiên, làm cho hoa và cảnh hoàng hôn trở nên nổi bật với màu sắc dữ dội, đầy kịch tính.", "en": "Một phong cách sống động, mạnh mẽ với tông màu magenta đặc trưng, mô phỏng loại phim dương bản nổi tiếng. Lý tưởng cho phong cảnh và thiên nhiên, làm cho hoa và cảnh hoàng hôn trở nên nổi bật với màu sắc dữ dội, đầy kịch tính." },
        "type": "color",
        "contrast": "normal",
        "saturation": "vibrant",
        "tags": ["vibrant", "powerful", "magenta-cast", "slide-film", "landscape", "nature", "flowers", "sunsets", "intense-colors", "dramatic"],
        "whiteBalance": "3900K, A7-M0.25",
        "settings": { "Black level": "-8", "Gamma": "Still", "Black Gamma": "Middle -7", "Knee": "Manual 75% +4", "Color Mode": "Still", "Saturation": "+10", "Color Phase": "-1" },
        "colorDepth": { "R": "+2", "G": "+7", "B": "+1", "C": "+2", "M": "-7", "Y": "0" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#FF00FF", // Magenta
        "coords": { "x": 3, "y": 6 }
    },
    {
        "id": "scl-015",
        "name": { "vi": "Vintage Slide", "en": "Vintage Slide" },
        "description": { "vi": "Một phong cách ấm áp, hơi phai màu với một chút sắc xanh lá-lục trong vùng tối. Nó gợi lên cảm giác như đang xem lại những tấm phim slide cũ của gia đình, hoàn hảo cho chân dung hoài niệm và các cảnh đời thường.", "en": "Một phong cách ấm áp, hơi phai màu với một chút sắc xanh lá-lục trong vùng tối. Nó gợi lên cảm giác như đang xem lại những tấm phim slide cũ của gia đình, hoàn hảo cho chân dung hoài niệm và các cảnh đời thường." },
        "type": "color",
        "contrast": "normal",
        "saturation": "faded",
        "tags": ["warm", "faded", "green-tint", "old-family-slides", "nostalgic-portrait", "everyday-scenes"],
        "whiteBalance": "3600K, A7-M1",
        "settings": { "Black level": "-4", "Gamma": "Movie", "Black Gamma": "Middle -7", "Knee": "Manual 80% +4", "Color Mode": "Still", "Saturation": "+10", "Color Phase": "-1" },
        "colorDepth": { "R": "+3", "G": "+5", "B": "-4", "C": "+2", "M": "+6", "Y": "+5" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#BC8F8F", // Rosy Brown
        "coords": { "x": 1, "y": -4 }
    },
    {
        "id": "scl-016",
        "name": { "vi": "Everyday Natural", "en": "Everyday Natural" },
        "description": { "vi": "Một cấu hình trong trẻo, cân bằng và linh hoạt với độ bão hòa vừa phải và tông màu da tự nhiên. Đây là lựa chọn hàng đầu cho nhiều tình huống, mang lại một cái nhìn chân thực với một chút cảm giác phim ảnh tinh tế.", "en": "Một cấu hình trong trẻo, cân bằng và linh hoạt với độ bão hòa vừa phải và tông màu da tự nhiên. Đây là lựa chọn hàng đầu cho nhiều tình huống, mang lại một cái nhìn chân thực với một chút cảm giác phim ảnh tinh tế." },
        "type": "color",
        "contrast": "normal",
        "saturation": "moderate",
        "tags": ["clean", "balanced", "versatile", "natural-skin-tones", "all-situations", "authentic-look", "subtle-film-feel"],
        "whiteBalance": "3900K, A7",
        "settings": { "Black level": "+2", "Gamma": "Still", "Black Gamma": "Wide +2", "Knee": "Auto", "Color Mode": "Still", "Saturation": "+10", "Color Phase": "-1" },
        "colorDepth": { "R": "-2", "G": "+7", "B": "+4", "C": "+2", "M": "-4", "Y": "+2" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#8FBC8F", // Dark Sea Green
        "coords": { "x": 0, "y": 0 }
    },
    {
        "id": "scl-017",
        "name": { "vi": "Soft Portrait", "en": "Soft Portrait" },
        "description": { "vi": "Đặc trưng bởi độ tương phản mềm mại và tông màu magenta dịu, công thức này hoàn hảo cho những bức chân dung nịnh mắt. Nó tái tạo tông màu da với chất lượng nhẹ nhàng, mượt mà, tạo ra một vẻ ngoài tinh tế và thanh lịch.", "en": "Đặc trưng bởi độ tương phản mềm mại và tông màu magenta dịu, công thức này hoàn hảo cho những bức chân dung nịnh mắt. Nó tái tạo tông màu da với chất lượng nhẹ nhàng, mượt mà, tạo ra một vẻ ngoài tinh tế và thanh lịch." },
        "type": "color",
        "contrast": "soft",
        "saturation": "muted",
        "tags": ["soft-contrast", "gentle-magenta", "flattering-portraits", "smooth-skin-tones", "delicate", "elegant"],
        "whiteBalance": "4100K, A7-M0.25",
        "settings": { "Black level": "-8", "Gamma": "Movie", "Black Gamma": "Middle -7", "Knee": "Manual 75% +4", "Color Mode": "Still", "Saturation": "+5", "Color Phase": "0" },
        "colorDepth": { "R": "0", "G": "+2", "B": "+3", "C": "+2", "M": "-7", "Y": "0" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#DB7093", // Pale Violet Red
        "coords": { "x": -3, "y": -1 }
    },
    {
        "id": "scl-018",
        "name": { "vi": "Vector Graphic", "en": "Vector Graphic" },
        "description": { "vi": "Một phong cách táo bạo, tương phản cao với màu sắc siêu bão hòa, gần như nhân tạo và màu đen sâu. Nó tạo ra một phong cách đồ họa mạnh mẽ, lý tưởng cho các chủ thể trừu tượng, kiến trúc hiện đại và nhiếp ảnh thử nghiệm.", "en": "Một phong cách táo bạo, tương phản cao với màu sắc siêu bão hòa, gần như nhân tạo và màu đen sâu. Nó tạo ra một phong cách đồ họa mạnh mẽ, lý tưởng cho các chủ thể trừu tượng, kiến trúc hiện đại và nhiếp ảnh thử nghiệm." },
        "type": "color",
        "contrast": "high",
        "saturation": "super-saturated",
        "tags": ["bold", "high-contrast", "super-saturated", "artificial-colors", "deep-blacks", "graphic", "abstract", "modern-architecture", "experimental-photography"],
        "whiteBalance": "4000K, A5-M0.5",
        "settings": { "Black level": "-15", "Gamma": "Still", "Black Gamma": "Wide -7", "Knee": "Manual 92.5% +5", "Color Mode": "S-Gamut3.Cine", "Saturation": "+27", "Color Phase": "+6" },
        "colorDepth": { "R": "+5", "G": "+7", "B": "+5", "C": "+5", "M": "+2", "Y": "+1" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#8A2BE2", // Blue Violet
        "coords": { "x": 8, "y": 9 }
    },
    {
        "id": "scl-019",
        "name": { "vi": "Pop Art", "en": "Pop Art" },
        "description": { "vi": "Một sự bùng nổ của màu sắc. Công thức này đẩy độ bão hòa lên mức tối đa, tạo ra một phong cách siêu rực rỡ, năng lượng cao. Hoàn hảo để tạo ra những tuyên bố táo bạo và ghi lại khía cạnh vui vẻ, tinh nghịch của cuộc sống.", "en": "Một sự bùng nổ của màu sắc. Công thức này đẩy độ bão hòa lên mức tối đa, tạo ra một phong cách siêu rực rỡ, năng lượng cao. Hoàn hảo để tạo ra những tuyên bố táo bạo và ghi lại khía cạnh vui vẻ, tinh nghịch của cuộc sống." },
        "type": "color",
        "contrast": "normal",
        "saturation": "maximum",
        "tags": ["color-explosion", "maximum-saturation", "super-vibrant", "high-energy", "bold-statements", "playful-side"],
        "whiteBalance": "4000K, A7-G1",
        "settings": { "Black level": "+2", "Gamma": "Still", "Black Gamma": "Middle +7", "Knee": "Manual 75% +5", "Color Mode": "S-Gamut3", "Saturation": "+32", "Color Phase": "+4" },
        "colorDepth": { "R": "+2", "G": "+7", "B": "+7", "C": "+7", "M": "+7", "Y": "+4" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#FF69B4", // Hot Pink
        "coords": { "x": 9, "y": 8 }
    },
    {
        "id": "scl-020",
        "name": { "vi": "Autumn Haze", "en": "Autumn Haze" },
        "description": { "vi": "Một phiên bản hiện đại của dòng phim ấm cổ điển, sử dụng S-Cinetone cho tông màu mượt mà. Nó mang lại cảm giác ấm cúng, với màu xanh lá và vàng hơi dịu, hoàn hảo để ghi lại tinh hoa của một ngày thu mờ sương.", "en": "Một phiên bản hiện đại của dòng phim ấm cổ điển, sử dụng S-Cinetone cho tông màu mượt mà. Nó mang lại cảm giác ấm cúng, với màu xanh lá và vàng hơi dịu, hoàn hảo để ghi lại tinh hoa của một ngày thu mờ sương." },
        "type": "color",
        "contrast": "normal",
        "saturation": "muted",
        "tags": ["modern-take", "classic-warm-film", "s-cinetone", "smooth-tones", "cozy", "subtle-greens", "yellows", "misty-autumn-day"],
        "whiteBalance": "4600K, A7-G1.25",
        "settings": { "Black level": "+2", "Gamma": "S-Cinetone", "Black Gamma": "Narrow -7", "Knee": "Auto", "Color Mode": "S-Cinetone", "Saturation": "+25", "Color Phase": "+5" },
        "colorDepth": { "R": "+3", "G": "-3", "B": "-5", "C": "-3", "M": "+3", "Y": "-2" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#D2B48C", // Tan
        "coords": { "x": 5, "y": -1 }
    },
    {
        "id": "scl-021",
        "name": { "vi": "Muted Pastels", "en": "Muted Pastels" },
        "description": { "vi": "Một phong cách nhẹ nhàng và tinh tế với độ bão hòa vừa phải và tông màu mềm mại. Nó linh hoạt cho việc chụp ảnh hàng ngày, mang lại cho hình ảnh một cảm giác yên bình và dễ chịu mà không bị màu sắc lấn át.", "en": "Một phong cách nhẹ nhàng và tinh tế với độ bão hòa vừa phải và tông màu mềm mại. Nó linh hoạt cho việc chụp ảnh hàng ngày, mang lại cho hình ảnh một cảm giác yên bình và dễ chịu mà không bị màu sắc lấn át." },
        "type": "color",
        "contrast": "normal",
        "saturation": "moderate",
        "tags": ["soft", "subtle", "moderate-saturation", "soft-tones", "versatile", "everyday-shooting", "peaceful", "pleasant", "not-overwhelmed-by-color"],
        "whiteBalance": "4500K, A7-M0.75",
        "settings": { "Black level": "+2", "Gamma": "Movie", "Black Gamma": "Wide -7", "Knee": "Manual 75% +4", "Color Mode": "Still", "Saturation": "+8", "Color Phase": "-1" },
        "colorDepth": { "R": "-4", "G": "+7", "B": "-3", "C": "-5", "M": "+5", "Y": "+4" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#ADD8E6", // Light Blue
        "coords": { "x": -1, "y": -3 }
    },
    {
        "id": "scl-022",
        "name": { "vi": "Neutral Standard", "en": "Neutral Standard" },
        "description": { "vi": "Một cấu hình trung tính, chân thực được thiết kế cho sự chính xác. Nó cung cấp một cái nhìn trong trẻo, tiêu chuẩn với sự thay đổi màu sắc tối thiểu, làm cho nó trở thành một nền tảng tuyệt vời, đáng tin cậy cho bất kỳ loại nhiếp ảnh nào.", "en": "Một cấu hình trung tính, chân thực được thiết kế cho sự chính xác. Nó cung cấp một cái nhìn trong trẻo, tiêu chuẩn với sự thay đổi màu sắc tối thiểu, làm cho nó trở thành một nền tảng tuyệt vời, đáng tin cậy cho bất kỳ loại nhiếp ảnh nào." },
        "type": "color",
        "contrast": "normal",
        "saturation": "low",
        "tags": ["neutral", "true-to-life", "accuracy", "clean", "standard-look", "minimal-color-shift", "reliable-base", "any-type-of-photography"],
        "whiteBalance": "4000K, A7-M0.25",
        "settings": { "Black level": "+2", "Gamma": "Still", "Black Gamma": "Wide -7", "Knee": "Manual 75% +4", "Color Mode": "Still", "Saturation": "+2", "Color Phase": "+1" },
        "colorDepth": { "R": "+1", "G": "+7", "B": "0", "C": "+3", "M": "+2", "Y": "+1" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#D3D3D3", // Light Gray
        "coords": { "x": 0, "y": -1 }
    },
    {
        "id": "scl-023",
        "name": { "vi": "Alpine Cool", "en": "Alpine Cool" },
        "description": { "vi": "Một công thức tông màu lạnh với nhiệt độ Kelvin cao, mang lại cho hình ảnh một sắc xanh trong trẻo, sắc nét. Rất phù hợp để nhấn mạnh ánh sáng lạnh trong các cảnh quan đô thị hoặc núi non, tạo ra một phong cách thẩm mỹ sạch sẽ và sắc sảo.", "en": "Một công thức tông màu lạnh với nhiệt độ Kelvin cao, mang lại cho hình ảnh một sắc xanh trong trẻo, sắc nét. Rất phù hợp để nhấn mạnh ánh sáng lạnh trong các cảnh quan đô thị hoặc núi non, tạo ra một phong cách thẩm mỹ sạch sẽ và sắc sảo." },
        "type": "color",
        "contrast": "normal",
        "saturation": "normal",
        "tags": ["cool-tone", "high-kelvin", "clean-blue-cast", "sharp", "cold-light", "urban-landscape", "mountain", "clean-aesthetic", "crisp"],
        "whiteBalance": "7000K, B5-M0.25",
        "settings": { "Black level": "-9", "Gamma": "Still", "Black Gamma": "Middle +7", "Knee": "Manual 75% +4", "Color Mode": "Still", "Saturation": "+6", "Color Phase": "+2" },
        "colorDepth": { "R": "+3", "G": "+7", "B": "+3", "C": "-5", "M": "+3", "Y": "-2" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#4682B4", // Steel Blue
        "coords": { "x": -6, "y": 3 }
    },
    {
        "id": "scl-024",
        "name": { "vi": "Arctic Negative", "en": "Arctic Negative" },
        "description": { "vi": "Đẩy cân bằng trắng đến mức lạnh nhất, công thức này tạo ra một phong cách độc đáo, cách điệu với sắc xanh lam-lục sâu. Nó hoàn hảo cho các bức ảnh thử nghiệm, tâm trạng và đầy không khí.", "en": "Đẩy cân bằng trắng đến mức lạnh nhất, công thức này tạo ra một phong cách độc đáo, cách điệu với sắc xanh lam-lục sâu. Nó hoàn hảo cho các bức ảnh thử nghiệm, tâm trạng và đầy không khí." },
        "type": "color",
        "contrast": "normal",
        "saturation": "normal",
        "tags": ["cold-white-balance", "unique", "stylized", "deep-blue-green-cast", "experimental", "moody", "atmospheric"],
        "whiteBalance": "9900K, B6-M0.5",
        "settings": { "Black level": "+4", "Gamma": "S-Cinetone", "Black Gamma": "Middle -7", "Knee": "Manual 75% +5", "Color Mode": "S-Cinetone", "Saturation": "+5", "Color Phase": "+1" },
        "colorDepth": { "R": "+2", "G": "+7", "B": "-4", "C": "-4", "M": "-5", "Y": "+3" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#00CED1", // Dark Cyan
        "coords": { "x": -9, "y": 1 }
    },
    {
        "id": "scl-025",
        "name": { "vi": "Saturated Cinema", "en": "Saturated Cinema" },
        "description": { "vi": "Một phong cách điện ảnh có độ bão hòa cao và mạnh mẽ, khác với phiên bản Fuji. Nó sử dụng không gian màu rộng để tạo ra màu sắc sâu, phong phú với đường cong gamma điện ảnh, rất phù hợp cho kể chuyện bằng hình ảnh sống động.", "en": "Một phong cách điện ảnh có độ bão hòa cao và mạnh mẽ, khác với phiên bản Fuji. Nó sử dụng không gian màu rộng để tạo ra màu sắc sâu, phong phú với đường cong gamma điện ảnh, rất phù hợp cho kể chuyện bằng hình ảnh sống động." },
        "type": "color",
        "contrast": "normal",
        "saturation": "high",
        "tags": ["high-saturation", "powerful-cinematic", "wide-color-space", "deep-rich-colors", "cinematic-gamma-curve", "vivid-visual-storytelling"],
        "whiteBalance": "4000K, A7-M1",
        "settings": { "Black level": "-5", "Gamma": "Cine4", "Black Gamma": "Wide -5", "Knee": "Manual 87.5% +3", "Color Mode": "S-Gamut3", "Saturation": "+32", "Color Phase": "+6" },
        "colorDepth": { "R": "-3", "G": "-2", "B": "+3", "C": "+7", "M": "-3", "Y": "-2" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#8B0000", // Dark Red
        "coords": { "x": 7, "y": 5 }
    },
    {
        "id": "scl-026",
        "name": { "vi": "HDR Cinema", "en": "HDR Cinema" },
        "description": { "vi": "Tận dụng HLG (Hybrid Log-Gamma), công thức này ghi lại dải tần nhạy sáng rộng với độ bão hòa cao. Nó tạo ra một hình ảnh sống động, tác động mạnh, vừa mang cảm giác điện ảnh vừa siêu thực, lý tưởng cho các cảnh quay năng lượng cao.", "en": "Tận dụng HLG (Hybrid Log-Gamma), công thức này ghi lại dải tần nhạy sáng rộng với độ bão hòa cao. Nó tạo ra một hình ảnh sống động, tác động mạnh, vừa mang cảm giác điện ảnh vừa siêu thực, lý tưởng cho các cảnh quay năng lượng cao." },
        "type": "color",
        "contrast": "normal",
        "saturation": "high",
        "tags": ["hlg", "hybrid-log-gamma", "wide-dynamic-range", "high-saturation", "vivid", "impactful", "cinematic-feel", "surreal", "high-energy-shots"],
        "whiteBalance": "3900K, A7",
        "settings": { "Black level": "-15", "Gamma": "HLG3", "Black Gamma": "Wide 0", "Knee": "Auto", "Color Mode": "BT.2020", "Saturation": "+32", "Color Phase": "+7" },
        "colorDepth": { "R": "-4", "G": "-1", "B": "+5", "C": "+4", "M": "+5", "Y": "+2" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#FF4500", // Orange Red
        "coords": { "x": 9, "y": 6 }
    },
    {
        "id": "scl-027",
        "name": { "vi": "Daylight Cinema", "en": "Daylight Cinema" },
        "description": { "vi": "Một phong cách điện ảnh hiện đại, trong trẻo dựa trên S-Cinetone. Nó được thiết kế cho ánh sáng ban ngày, mang lại tông màu da đẹp, độ bão hòa cao và cảm giác chuyên nghiệp, bóng bẩy ngay từ máy ảnh.", "en": "Một phong cách điện ảnh hiện đại, trong trẻo dựa trên S-Cinetone. Nó được thiết kế cho ánh sáng ban ngày, mang lại tông màu da đẹp, độ bão hòa cao và cảm giác chuyên nghiệp, bóng bẩy ngay từ máy ảnh." },
        "type": "color",
        "contrast": "normal",
        "saturation": "high",
        "tags": ["modern-cinematic", "clean", "s-cinetone", "daylight", "beautiful-skin-tones", "high-saturation", "professional", "polished", "straight-out-of-camera"],
        "whiteBalance": "3700K, A7-G1",
        "settings": { "Black level": "+9", "Gamma": "S-Cinetone", "Black Gamma": "Narrow -7", "Knee": "Auto", "Color Mode": "S-Cinetone", "Saturation": "+32", "Color Phase": "+3" },
        "colorDepth": { "R": "0", "G": "+3", "B": "+2", "C": "+2", "M": "-3", "Y": "+1" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#F0E68C", // Khaki
        "coords": { "x": 5, "y": 4 }
    },
    {
        "id": "scl-028",
        "name": { "vi": "Phoenix Fire", "en": "Phoenix Fire" },
        "description": { "vi": "Một phong cách thử nghiệm và mạnh mẽ với độ bão hòa cực cao và tông màu ấm rõ rệt. Nó tạo ra màu đỏ và cam rực lửa, hoàn hảo cho nhiếp ảnh táo bạo, trừu tượng và có tác động mạnh.", "en": "Một phong cách thử nghiệm và mạnh mẽ với độ bão hòa cực cao và tông màu ấm rõ rệt. Nó tạo ra màu đỏ và cam rực lửa, hoàn hảo cho nhiếp ảnh táo bạo, trừu tượng và có tác động mạnh." },
        "type": "color",
        "contrast": "normal",
        "saturation": "extreme",
        "tags": ["experimental", "powerful", "ultra-high-saturation", "pronounced-warm-tones", "fiery-reds", "oranges", "bold", "abstract", "high-impact"],
        "whiteBalance": "8500K, B3.5-G1",
        "settings": { "Black level": "-15", "Gamma": "Still", "Black Gamma": "Wide -7", "Knee": "Manual 105% +5", "Color Mode": "S-Cinetone", "Saturation": "+32", "Color Phase": "+1" },
        "colorDepth": { "R": "+5", "G": "+7", "B": "+2", "C": "+5", "M": "+5", "Y": "+5" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#FF4500", // OrangeRed
        "coords": { "x": 9, "y": 9 }
    },
    {
        "id": "scl-029",
        "name": { "vi": "Hollywood Cool", "en": "Hollywood Cool" },
        "description": { "vi": "Một công thức điện ảnh cân bằng cho ánh sáng tungsten với thiên hướng xanh lam-lục mát mẻ. Dựa trên S-Cinetone, nó mang lại tông màu mượt mà và một vẻ ngoài tinh xảo, chuyên nghiệp gợi nhớ đến các bộ phim Hollywood cổ điển.", "en": "Một công thức điện ảnh cân bằng cho ánh sáng tungsten với thiên hướng xanh lam-lục mát mẻ. Dựa trên S-Cinetone, nó mang lại tông màu mượt mà và một vẻ ngoài tinh xảo, chuyên nghiệp gợi nhớ đến các bộ phim Hollywood cổ điển." },
        "type": "color",
        "contrast": "normal",
        "saturation": "normal",
        "tags": ["balanced-cinematic", "tungsten-light", "cool-blue-green-bias", "s-cinetone", "smooth-tones", "sophisticated", "professional-look", "classic-hollywood"],
        "whiteBalance": "8200K, B4.5-G1.75",
        "settings": { "Black level": "-10", "Gamma": "S-Cinetone", "Black Gamma": "Narrow -7", "Knee": "Auto", "Color Mode": "S-Cinetone", "Saturation": "+16", "Color Phase": "+2" },
        "colorDepth": { "R": "+5", "G": "+7", "B": "-6", "C": "-5", "M": "+7", "Y": "-4" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#6495ED", // Cornflower Blue
        "coords": { "x": -8, "y": 0 }
    },
    {
        "id": "scl-040",
        "name": { "vi": "Graphite Standard", "en": "Graphite Standard" },
        "description": { "vi": "Một phong cách đơn sắc cân bằng, đa dụng với dải tông màu đầy đủ và các tông màu trung bình trong trẻo. Đây là điểm khởi đầu hoàn hảo cho nhiếp ảnh đen trắng, mang lại kết quả cổ điển, vượt thời gian cho mọi chủ thể.", "en": "Một phong cách đơn sắc cân bằng, đa dụng với dải tông màu đầy đủ và các tông màu trung bình trong trẻo. Đây là điểm khởi đầu hoàn hảo cho nhiếp ảnh đen trắng, mang lại kết quả cổ điển, vượt thời gian cho mọi chủ thể." },
        "type": "bw",
        "contrast": "normal",
        "saturation": "normal",
        "tags": ["balanced-monochrome", "versatile", "full-tonal-range", "clean-midtones", "perfect-starting-point", "black-and-white", "classic", "timeless"],
        "whiteBalance": "AWB (Ưu tiên trắng)",
        "settings": { "Black level": "-11", "Gamma": "Still", "Black Gamma": "Middle -3", "Knee": "Manual 85% +5", "Color Mode": "Black & White", "Saturation": "+15", "Color Phase": "0" },
        "colorDepth": { "R": "-1", "G": "+1", "B": "-1", "C": "+3", "M": "-3", "Y": "-1" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#555555", // Dark Gray
        "coords": { "x": 0, "y": 0 } // Placeholder for B&W chart
    },
    {
        "id": "scl-041",
        "name": { "vi": "Obsidian Contrast", "en": "Obsidian Contrast" },
        "description": { "vi": "Một phong cách đơn sắc kịch tính, tương phản cao với màu đen sâu như mực và màu trắng sắc nét. Lý tưởng cho các chi tiết kiến trúc, nhiếp ảnh đường phố mạnh mẽ và làm nổi bật chủ thể với sự rõ ràng ấn tượng.", "en": "Một phong cách đơn sắc kịch tính, tương phản cao với màu đen sâu như mực và màu trắng sắc nét. Lý tưởng cho các chi tiết kiến trúc, nhiếp ảnh đường phố mạnh mẽ và làm nổi bật chủ thể với sự rõ ràng ấn tượng." },
        "type": "bw",
        "contrast": "high",
        "saturation": "normal",
        "tags": ["dramatic-monochrome", "high-contrast", "inky-blacks", "crisp-whites", "architectural-details", "powerful-street-photography", "impressive-clarity"],
        "whiteBalance": "AWB (Ưu tiên trắng)",
        "settings": { "Black level": "-15", "Gamma": "Still", "Black Gamma": "Wide -7", "Knee": "Manual 85% +5", "Color Mode": "Black & White", "Saturation": "+15", "Color Phase": "0" },
        "colorDepth": { "R": "+2", "G": "-4", "B": "-1", "C": "+2", "M": "-1", "Y": "+2" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#333333", // Very Dark Gray
        "coords": { "x": 8, "y": 5 }
    },
    {
        "id": "scl-042",
        "name": { "vi": "Newsprint Grit", "en": "Newsprint Grit" },
        "description": { "vi": "Một phong cách mạnh mẽ, tương phản cao mô phỏng cảm giác của phim đen trắng \"pushed\" được các nhà báo ảnh sử dụng. Nó có hạt, sắc nét và đầy cá tính, hoàn hảo để ghi lại những khoảnh khắc thô mộc, không qua chỉnh sửa.", "en": "Một phong cách mạnh mẽ, tương phản cao mô phỏng cảm giác của phim đen trắng \"pushed\" được các nhà báo ảnh sử dụng. Nó có hạt, sắc nét và đầy cá tính, hoàn hảo để ghi lại những khoảnh khắc thô mộc, không qua chỉnh sửa." },
        "type": "bw",
        "contrast": "high",
        "saturation": "normal",
        "tags": ["powerful", "high-contrast", "pushed-black-and-white-film", "photojournalist", "grainy", "sharp", "character", "raw", "unedited-moments"],
        "whiteBalance": "5500K, A3-G2",
        "settings": { "Black level": "+5", "Gamma": "Still", "Black Gamma": "Wide -7", "Knee": "Manual 77.5% +2", "Color Mode": "Black & White", "Saturation": "+24", "Color Phase": "0" },
        "colorDepth": { "R": "-4", "G": "-1", "B": "+6", "C": "+5", "M": "-3", "Y": "-3" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#777777", // Medium Gray
        "coords": { "x": 6, "y": -2 }
    },
    {
        "id": "scl-043",
        "name": { "vi": "Silver Gelatin", "en": "Silver Gelatin" },
        "description": { "vi": "Một cấu hình tương phản phẳng, mềm mại với các tông màu trung bình phong phú và sự chuyển tiếp mượt mà. Nó mô phỏng vẻ ngoài của một bản in phòng tối cổ điển trên giấy bạc gelatin, lý tưởng cho chân dung nghệ thuật và các bố cục tinh tế.", "en": "Một cấu hình tương phản phẳng, mềm mại với các tông màu trung bình phong phú và sự chuyển tiếp mượt mà. Nó mô phỏng vẻ ngoài của một bản in phòng tối cổ điển trên giấy bạc gelatin, lý tưởng cho chân dung nghệ thuật và các bố cục tinh tế." },
        "type": "bw",
        "contrast": "soft",
        "saturation": "normal",
        "tags": ["flat", "soft-contrast", "rich-midtones", "smooth-transitions", "classic-darkroom-print", "silver-gelatin-paper", "fine-art-portrait", "subtle-compositions"],
        "whiteBalance": "5500K, A3-G2",
        "settings": { "Black level": "+3", "Gamma": "Cine1", "Black Gamma": "Narrow +5", "Knee": "Manual 75% +3", "Color Mode": "Black & White", "Saturation": "+24", "Color Phase": "0" },
        "colorDepth": { "R": "+3", "G": "+3", "B": "+3", "C": "+2", "M": "+3", "Y": "+2" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#AAAAAA", // Light Gray
        "coords": { "x": -5, "y": -5 }
    },
    {
        "id": "scl-044",
        "name": { "vi": "Crystal Clear", "en": "Crystal Clear" },
        "description": { "vi": "Một phong cách đen trắng trong trẻo, sắc nét và có tông màu lạnh. Nó có hạt mịn và độ trong cao, hoàn hảo cho các chủ thể kỹ thuật, kiến trúc và chân dung nơi chi tiết là quan trọng nhất.", "en": "Một phong cách đen trắng trong trẻo, sắc nét và có tông màu lạnh. Nó có hạt mịn và độ trong cao, hoàn hảo cho các chủ thể kỹ thuật, kiến trúc và chân dung nơi chi tiết là quan trọng nhất." },
        "type": "bw",
        "contrast": "normal",
        "saturation": "normal",
        "tags": ["clean", "crisp", "cool-tone", "fine-grain", "high-clarity", "technical-subjects", "architecture", "detail-oriented-portraits"],
        "whiteBalance": "AWB, B3-G0.25",
        "settings": { "Black level": "-12", "Gamma": "Still", "Black Gamma": "Middle -7", "Knee": "Manual 82% +5", "Color Mode": "Black & White", "Saturation": "0", "Color Phase": "0" },
        "colorDepth": { "R": "-1", "G": "-7", "B": "+7", "C": "+7", "M": "+7", "Y": "-4" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#BBBBBB", // Lighter Gray
        "coords": { "x": 3, "y": 7 }
    },
    {
        "id": "scl-045",
        "name": { "vi": "Classic Reportage", "en": "Classic Reportage" },
        "description": { "vi": "Một phong cách đa dụng, có độ tương phản trung bình với cấu trúc hạt cổ điển. Đây là lựa chọn \"chủ lực\" của nhiếp ảnh đen trắng, lý tưởng cho phóng sự, nhiếp ảnh đường phố và ghi lại cuộc sống hàng ngày với cảm giác chân thực.", "en": "Một phong cách đa dụng, có độ tương phản trung bình với cấu trúc hạt cổ điển. Đây là lựa chọn \"chủ lực\" của nhiếp ảnh đen trắng, lý tưởng cho phóng sự, nhiếp ảnh đường phố và ghi lại cuộc sống hàng ngày với cảm giác chân thực." },
        "type": "bw",
        "contrast": "medium",
        "saturation": "normal",
        "tags": ["versatile", "medium-contrast", "classic-grain", "black-and-white-workhorse", "photojournalism", "street-photography", "everyday-life", "authentic-feel"],
        "whiteBalance": "AWB, A3",
        "settings": { "Black level": "-12", "Gamma": "Movie", "Black Gamma": "Middle -5", "Knee": "Manual 75% +4", "Color Mode": "Black & White", "Saturation": "0", "Color Phase": "0" },
        "colorDepth": { "R": "0", "G": "+3", "B": "0", "C": "+2", "M": "+3", "Y": "0" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#888888", // Gray
        "coords": { "x": -2, "y": 2 }
    },
    {
        "id": "scl-046",
        "name": { "vi": "Noir Film", "en": "Noir Film" },
        "description": { "vi": "Một phong cách đen trắng có độ tương phản rất cao, đầy kịch tính với màu đen sâu, bị nén và màu trắng sáng. Nó gợi lên phong cách của phim noir cổ điển, hoàn hảo để tạo ra sự bí ẩn, kịch tính và các bố cục đồ họa.", "en": "Một phong cách đen trắng có độ tương phản rất cao, đầy kịch tính với màu đen sâu, bị nén và màu trắng sáng. Nó gợi lên phong cách của phim noir cổ điển, hoàn hảo để tạo ra sự bí ẩn, kịch tính và các bố cục đồ họa." },
        "type": "bw",
        "contrast": "very-high",
        "saturation": "normal",
        "tags": ["very-high-contrast", "dramatic", "deep-crushed-blacks", "bright-whites", "classic-film-noir", "mystery", "graphic-compositions"],
        "whiteBalance": "5500K",
        "settings": { "Black level": "-15", "Gamma": "Still", "Black Gamma": "Wide -7", "Knee": "Manual 75% +4", "Color Mode": "Black & White", "Saturation": "+32", "Color Phase": "0" },
        "colorDepth": { "R": "+2", "G": "+7", "B": "+1", "C": "+2", "M": "+7", "Y": "+1" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#222222", // Very Dark Gray
        "coords": { "x": 9, "y": 9 }
    },
    {
        "id": "scl-047",
        "name": { "vi": "Low Light Grain", "en": "Low Light Grain" },
        "description": { "vi": "Được thiết kế để mô phỏng phim tốc độ cao, công thức này sử dụng gamma điện ảnh để xử lý độ tương phản trong khi khuyến khích hạt. Nó hoàn hảo cho các tình huống thiếu sáng, thêm kết cấu và không khí cho ảnh.", "en": "Được thiết kế để mô phỏng phim tốc độ cao, công thức này sử dụng gamma điện ảnh để xử lý độ tương phản trong khi khuyến khích hạt. Nó hoàn hảo cho các tình huống thiếu sáng, thêm kết cấu và không khí cho ảnh." },
        "type": "bw",
        "contrast": "normal",
        "saturation": "normal",
        "tags": ["high-speed-film-emulation", "cinematic-gamma", "contrast-handling", "grain-encouraged", "low-light-situations", "texture", "atmosphere"],
        "whiteBalance": "AWB (Ưu tiên trắng)",
        "settings": { "Black level": "-11", "Gamma": "Cine4", "Black Gamma": "Wide +7", "Knee": "Manual 82.5% +0", "Color Mode": "Black & White", "Saturation": "0", "Color Phase": "-2" },
        "colorDepth": { "R": "+3", "G": "+2", "B": "+7", "C": "+7", "M": "+4", "Y": "-5" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#666666", // Dark Gray
        "coords": { "x": -4, "y": -7 }
    },
    {
        "id": "scl-048",
        "name": { "vi": "Modern B&W", "en": "Modern B&W" },
        "description": { "vi": "Một phong cách đen trắng đương đại sử dụng gamma S-Cinetone để tạo ra sự chuyển tông mượt mà, đẹp mắt. Nó mang lại màu đen sâu mà không quá gắt, rất phù hợp cho chân dung hiện đại và nghệ thuật.", "en": "Một phong cách đen trắng đương đại sử dụng gamma S-Cinetone để tạo ra sự chuyển tông mượt mà, đẹp mắt. Nó mang lại màu đen sâu mà không quá gắt, rất phù hợp cho chân dung hiện đại và nghệ thuật." },
        "type": "bw",
        "contrast": "normal",
        "saturation": "normal",
        "tags": ["contemporary-black-and-white", "s-cinetone-gamma", "smooth-beautiful-tonal-transitions", "deep-blacks", "not-harsh", "modern-portrait", "fine-art"],
        "whiteBalance": "5500K",
        "settings": { "Black level": "-15", "Gamma": "S-Cinetone", "Black Gamma": "Narrow -7", "Knee": "Manual 75% +2", "Color Mode": "Black & White", "Saturation": "+28", "Color Phase": "0" },
        "colorDepth": { "R": "-3", "G": "+4", "B": "+3", "C": "+3", "M": "+3", "Y": "+2" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#444444", // Dark Gray
        "coords": { "x": 5, "y": 4 }
    },
    {
        "id": "scl-049",
        "name": { "vi": "Ortho Portrait", "en": "Ortho Portrait" },
        "description": { "vi": "Mô phỏng phim orthochromatic, loại phim không nhạy với ánh sáng đỏ. Điều này dẫn đến tông màu da và môi bị tối đi, tạo ra một phong cách chân dung độc đáo, cổ điển và thường đầy kịch tính.", "en": "Mô phỏng phim orthochromatic, loại phim không nhạy với ánh sáng đỏ. Điều này dẫn đến tông màu da và môi bị tối đi, tạo ra một phong cách chân dung độc đáo, cổ điển và thường đầy kịch tính." },
        "type": "color", // This one is tricky, it's a color effect but often used for B&W-like portraits
        "contrast": "normal",
        "saturation": "normal",
        "tags": ["orthochromatic-film", "red-light-insensitive", "darkened-skin-tones", "lips", "unique-portrait", "vintage", "dramatic"],
        "whiteBalance": "AWB, A3-M2.75",
        "settings": { "Black level": "-12", "Gamma": "Movie", "Black Gamma": "Narrow -7", "Knee": "Manual 105% +5", "Color Mode": "Still", "Saturation": "+15", "Color Phase": "0" },
        "colorDepth": { "R": "+7", "G": "+7", "B": "-7", "C": "-7", "M": "+7", "Y": "+7" },
        "detailSettings": { "Level": "0" },
        "personalityColor": "#708090", // Slate Gray
        "coords": { "x": -6, "y": -8 }
    }
];

export default recipesData;
