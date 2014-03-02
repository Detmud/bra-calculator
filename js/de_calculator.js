$(document).ready(function(){
	$("#calc").click(function(){
		$bust = $("#bust").val();
		$underbust = $("#underbust").val();

		$cup = "Oh";
		$band = "Oh"

		if (($underbust >= 58) && ($underbust < 63)) {
			$band = "55"

			if ($bust <= 63) {
				$cup = "Ô’";
				$band = "ò";
			}
			else if ($bust <= 65) {
				$cup = "AAA";
			}
			else if ($bust <= 67) {
				$cup = "AA";
			}
			else if ($bust <= 69) {
				$cup = "A";
			}
			else if ($bust <= 71) {
				$cup = "B";
			}
			else if($bust <= 73) {
				$cup = "C";            
			}
			else if($bust <= 75) {
				$cup = "D";
			}
			else if($bust <= 77) {
				$cup = "E";
			}
			else if($bust <= 79) {
				$cup = "F";
			}
			else if($bust <= 81) {
				$cup = "G";
			}
			else if($bust <= 83) {
				$cup = "H";
			}
			else if($bust <= 85) {
				$cup = "I";
			}
			else if($bust <= 87) {
				$cup = "J";
			}
			else if($bust <= 89) {
				$cup = "K";
			}
			else if($bust <= 91) {
				$cup = "L";
			}
			else if($bust <= 93) {
				$cup = "M";
			}
			else if($bust <= 95) {
				$cup = "N";
			}
			else if($bust <= 97) {
				$cup = "O";
			}
			else if($bust <= 99) {
				$cup = "P";
			}
			else if($bust <= 101) {
				$cup = "Q";
			}
			else if($bust <= 103) {
				$cup = "R";
			}
			else if($bust <= 105) {
				$cup = "S";
			}
			else if($bust <= 107) {
				$cup = "T";
			}
			else if ($bust <= 109) {
				$cup = "U";
			}
			else if ($bust <= 111) {
				$cup = "V";
			}
			else if ($bust <= 113) {
				$cup = "W";
			}	
			else if ($bust <= 115) {
				$cup = "X";
			}	
			else if ($bust <= 117) {
				$cup = "Y";
			}	
			else if ($bust <= 119) {
				$cup = "Z";
			}
			else {
					$cup = "Ô’";
					$band = "ò";
				}	
		}

		if (($underbust >= 63) && ($underbust < 68)) {
			$band = "60"

			if ($bust <= 68) {
					$cup = "Ô’";
					$band = "ò";
				}
				else if ($bust <= 70) {
					$cup = "AAA";
				}
				else if ($bust <= 72) {
					$cup = "AA";
				}
				else if ($bust <= 74) {
					$cup = "A";
				}
				else if ($bust <= 76) {
					$cup = "B";
				}
				else if($bust <= 78) {
					$cup = "C";            
				}
				else if($bust <= 80) {
					$cup = "D";
				}
				else if($bust <= 82) {
					$cup = "E";
				}
				else if($bust <= 84) {
					$cup = "F";
				}
				else if($bust <= 86) {
					$cup = "G";
				}
				else if($bust <= 88) {
					$cup = "H";
				}
				else if($bust <= 90) {
					$cup = "I";
				}
				else if($bust <= 92) {
					$cup = "J";
				}
				else if($bust <= 94) {
					$cup = "K";
				}
				else if($bust <= 96) {
					$cup = "L";
				}
				else if($bust <= 98) {
					$cup = "M";
				}
				else if($bust <= 100) {
					$cup = "N";
				}
				else if($bust <= 102) {
					$cup = "O";
				}
				else if($bust <= 104) {
					$cup = "P";
				}
				else if($bust <= 106) {
					$cup = "Q";
				}
				else if($bust <= 108) {
					$cup = "R";
				}
				else if($bust <= 110) {
					$cup = "S";
				}
				else if($bust <= 112) {
					$cup = "T";
				}
				else if ($bust <= 114) {
					$cup = "U";
				}
				else if ($bust <= 116) {
					$cup = "V";
				}
				else if ($bust <= 118) {
					$cup = "W";
				}	
				else if ($bust <= 120) {
					$cup = "X";
				}	
				else if ($bust <= 122) {
					$cup = "Y";
				}	
				else if ($bust <= 124) {
					$cup = "Z";
				}
				else {
					$cup = "Ô’";
					$band = "ò";
				}	
			}

		if (($underbust >= 68) && ($underbust < 73)) {
			$band = "65"

			if ($bust <= 73) {
					$cup = "Ô’";
					$band = "ò";
				}
				else if ($bust <= 75) {
					$cup = "AAA";
				}
				else if ($bust <= 77) {
					$cup = "AA";
				}
				else if ($bust <= 79) {
					$cup = "A";
				}
				else if ($bust <= 81) {
					$cup = "B";
				}
				else if($bust <= 83) {
					$cup = "C";            
				}
				else if($bust <= 85) {
					$cup = "D";
				}
				else if($bust <= 87) {
					$cup = "E";
				}
				else if($bust <= 89) {
					$cup = "F";
				}
				else if($bust <= 91) {
					$cup = "G";
				}
				else if($bust <= 93) {
					$cup = "H";
				}
				else if($bust <= 95) {
					$cup = "I";
				}
				else if($bust <= 97) {
					$cup = "J";
				}
				else if($bust <= 99) {
					$cup = "K";
				}
				else if($bust <= 101) {
					$cup = "L";
				}
				else if($bust <= 103) {
					$cup = "M";
				}
				else if($bust <= 105) {
					$cup = "N";
				}
				else if($bust <= 107) {
					$cup = "O";
				}
				else if($bust <= 109) {
					$cup = "P";
				}
				else if($bust <= 111) {
					$cup = "Q";
				}
				else if($bust <= 113) {
					$cup = "R";
				}
				else if($bust <= 115) {
					$cup = "S";
				}
				else if($bust <= 117) {
					$cup = "T";
				}
				else if ($bust <= 119) {
					$cup = "U";
				}
				else if ($bust <= 121) {
					$cup = "V";
				}
				else if ($bust <= 123) {
					$cup = "W";
				}	
				else if ($bust <= 125) {
					$cup = "X";
				}	
				else if ($bust <= 127) {
					$cup = "Y";
				}	
				else if ($bust <= 129) {
					$cup = "Z";
				}
				else {
					$cup = "Ô’";
					$band = "ò";
				}	
			}
			
		if (($underbust >= 73) && ($underbust < 78)) {
			$band = "70"

			if ($bust <= 78) {
					$cup = "Ô’";
					$band = "ò";
				}
				else if ($bust <= 80) {
					$cup = "AAA";
				}
				else if ($bust <= 82) {
					$cup = "AA";
				}
				else if ($bust <= 84) {
					$cup = "A";
				}
				else if ($bust <= 86) {
					$cup = "B";
				}
				else if($bust <= 88) {
					$cup = "C";            
				}
				else if($bust <= 90) {
					$cup = "D";
				}
				else if($bust <= 92) {
					$cup = "E";
				}
				else if($bust <= 94) {
					$cup = "F";
				}
				else if($bust <= 96) {
					$cup = "G";
				}
				else if($bust <= 98) {
					$cup = "H";
				}
				else if($bust <= 100) {
					$cup = "I";
				}
				else if($bust <= 102) {
					$cup = "J";
				}
				else if($bust <= 104) {
					$cup = "K";
				}
				else if($bust <= 106) {
					$cup = "L";
				}
				else if($bust <= 108) {
					$cup = "M";
				}
				else if($bust <= 110) {
					$cup = "N";
				}
				else if($bust <= 112) {
					$cup = "O";
				}
				else if($bust <= 114) {
					$cup = "P";
				}
				else if($bust <= 116) {
					$cup = "Q";
				}
				else if($bust <= 118) {
					$cup = "R";
				}
				else if($bust <= 120) {
					$cup = "S";
				}
				else if($bust <= 122) {
					$cup = "T";
				}
				else if ($bust <= 124) {
					$cup = "U";
				}
				else if ($bust <= 126) {
					$cup = "V";
				}
				else if ($bust <= 128) {
					$cup = "W";
				}	
				else if ($bust <= 130) {
					$cup = "X";
				}	
				else if ($bust <= 132) {
					$cup = "Y";
				}	
				else if ($bust <= 134) {
					$cup = "Z";
				}
				else {
					$cup = "Ô’";
					$band = "ò";
				}	
			}

		if (($underbust >= 78) && ($underbust < 83)) {
			$band = "75"

			if ($bust <= 83) {
					$cup = "Ô’";
					$band = "ò";
				}
				else if ($bust <= 85) {
					$cup = "AAA";
				}
				else if ($bust <= 87) {
					$cup = "AA";
				}
				else if ($bust <= 89) {
					$cup = "A";
				}
				else if ($bust <= 91) {
					$cup = "B";
				}
				else if($bust <= 93) {
					$cup = "C";            
				}
				else if($bust <= 95) {
					$cup = "D";
				}
				else if($bust <= 97) {
					$cup = "E";
				}
				else if($bust <= 99) {
					$cup = "F";
				}
				else if($bust <= 101) {
					$cup = "G";
				}
				else if($bust <= 103) {
					$cup = "H";
				}
				else if($bust <= 105) {
					$cup = "I";
				}
				else if($bust <= 107) {
					$cup = "J";
				}
				else if($bust <= 109) {
					$cup = "K";
				}
				else if($bust <= 111) {
					$cup = "L";
				}
				else if($bust <= 113) {
					$cup = "M";
				}
				else if($bust <= 115) {
					$cup = "N";
				}
				else if($bust <= 117) {
					$cup = "O";
				}
				else if($bust <= 119) {
					$cup = "P";
				}
				else if($bust <= 121) {
					$cup = "Q";
				}
				else if($bust <= 123) {
					$cup = "R";
				}
				else if($bust <= 125) {
					$cup = "S";
				}
				else if($bust <= 127) {
					$cup = "T";
				}
				else if ($bust <= 129) {
					$cup = "U";
				}
				else if ($bust <= 131) {
					$cup = "V";
				}
				else if ($bust <= 133) {
					$cup = "W";
				}	
				else if ($bust <= 135) {
					$cup = "X";
				}	
				else if ($bust <= 137) {
					$cup = "Y";
				}	
				else if ($bust <= 139) {
					$cup = "Z";
				}
				else {
					$cup = "Ô’";
					$band = "ò";
				}	
			}
			
		if (($underbust >= 83) && ($underbust < 88)) {
			$band = "75"

			if ($bust <= 83) {
					$cup = "Ô’";
					$band = "ò";
				}
				else if ($bust <= 85) {
					$cup = "AAA";
				}
				else if ($bust <= 87) {
					$cup = "AA";
				}
				else if ($bust <= 89) {
					$cup = "A";
				}
				else if ($bust <= 91) {
					$cup = "B";
				}
				else if($bust <= 93) {
					$cup = "C";            
				}
				else if($bust <= 95) {
					$cup = "D";
				}
				else if($bust <= 97) {
					$cup = "E";
				}
				else if($bust <= 99) {
					$cup = "F";
				}
				else if($bust <= 101) {
					$cup = "G";
				}
				else if($bust <= 103) {
					$cup = "H";
				}
				else if($bust <= 105) {
					$cup = "I";
				}
				else if($bust <= 107) {
					$cup = "J";
				}
				else if($bust <= 109) {
					$cup = "K";
				}
				else if($bust <= 111) {
					$cup = "L";
				}
				else if($bust <= 113) {
					$cup = "M";
				}
				else if($bust <= 115) {
					$cup = "N";
				}
				else if($bust <= 117) {
					$cup = "O";
				}
				else if($bust <= 119) {
					$cup = "P";
				}
				else if($bust <= 121) {
					$cup = "Q";
				}
				else if($bust <= 123) {
					$cup = "R";
				}
				else if($bust <= 125) {
					$cup = "S";
				}
				else if($bust <= 127) {
					$cup = "T";
				}
				else if ($bust <= 129) {
					$cup = "U";
				}
				else if ($bust <= 131) {
					$cup = "V";
				}
				else if ($bust <= 133) {
					$cup = "W";
				}	
				else if ($bust <= 135) {
					$cup = "X";
				}	
				else if ($bust <= 137) {
					$cup = "Y";
				}	
				else if ($bust <= 139) {
					$cup = "Z";
				}
				else {
					$cup = "Ô’";
					$band = "ò";
				}	
			}

		if (($underbust >= 88) && ($underbust < 93)) {
			$band = "80"

			if ($bust <= 88) {
					$cup = "Ô’";
					$band = "ò";
				}
				else if ($bust <= 90) {
					$cup = "AAA";
				}
				else if ($bust <= 92) {
					$cup = "AA";
				}
				else if ($bust <= 94) {
					$cup = "A";
				}
				else if ($bust <= 96) {
					$cup = "B";
				}
				else if($bust <= 98) {
					$cup = "C";            
				}
				else if($bust <= 100) {
					$cup = "D";
				}
				else if($bust <= 102) {
					$cup = "E";
				}
				else if($bust <= 104) {
					$cup = "F";
				}
				else if($bust <= 106) {
					$cup = "G";
				}
				else if($bust <= 108) {
					$cup = "H";
				}
				else if($bust <= 110) {
					$cup = "I";
				}
				else if($bust <= 112) {
					$cup = "J";
				}
				else if($bust <= 114) {
					$cup = "K";
				}
				else if($bust <= 116) {
					$cup = "L";
				}
				else if($bust <= 118) {
					$cup = "M";
				}
				else if($bust <= 120) {
					$cup = "N";
				}
				else if($bust <= 122) {
					$cup = "O";
				}
				else if($bust <= 124) {
					$cup = "P";
				}
				else if($bust <= 126) {
					$cup = "Q";
				}
				else if($bust <= 128) {
					$cup = "R";
				}
				else if($bust <= 130) {
					$cup = "S";
				}
				else if($bust <= 132) {
					$cup = "T";
				}
				else if ($bust <= 134) {
					$cup = "U";
				}
				else if ($bust <= 136) {
					$cup = "V";
				}
				else if ($bust <= 138) {
					$cup = "W";
				}	
				else if ($bust <= 140) {
					$cup = "X";
				}	
				else if ($bust <= 142) {
					$cup = "Y";
				}	
				else if ($bust <= 144) {
					$cup = "Z";
				}
				else {
					$cup = "Ô’";
					$band = "ò";
				}	
			}

		if (($underbust >= 93) && ($underbust < 98)) {
			$band = "85"

			if ($bust <= 93) {
					$cup = "Ô’";
					$band = "ò";
				}
				else if ($bust <= 95) {
					$cup = "AAA";
				}
				else if ($bust <= 97) {
					$cup = "AA";
				}
				else if ($bust <= 99) {
					$cup = "A";
				}
				else if ($bust <= 101) {
					$cup = "B";
				}
				else if($bust <= 103) {
					$cup = "C";            
				}
				else if($bust <= 105) {
					$cup = "D";
				}
				else if($bust <= 107) {
					$cup = "E";
				}
				else if($bust <= 109) {
					$cup = "F";
				}
				else if($bust <= 111) {
					$cup = "G";
				}
				else if($bust <= 113) {
					$cup = "H";
				}
				else if($bust <= 115) {
					$cup = "I";
				}
				else if($bust <= 117) {
					$cup = "J";
				}
				else if($bust <= 119) {
					$cup = "K";
				}
				else if($bust <= 121) {
					$cup = "L";
				}
				else if($bust <= 123) {
					$cup = "M";
				}
				else if($bust <= 125) {
					$cup = "N";
				}
				else if($bust <= 127) {
					$cup = "O";
				}
				else if($bust <= 129) {
					$cup = "P";
				}
				else if($bust <= 131) {
					$cup = "Q";
				}
				else if($bust <= 133) {
					$cup = "R";
				}
				else if($bust <= 135) {
					$cup = "S";
				}
				else if($bust <= 137) {
					$cup = "T";
				}
				else if ($bust <= 139) {
					$cup = "U";
				}
				else if ($bust <= 141) {
					$cup = "V";
				}
				else if ($bust <= 143) {
					$cup = "W";
				}	
				else if ($bust <= 145) {
					$cup = "X";
				}	
				else if ($bust <= 147) {
					$cup = "Y";
				}	
				else if ($bust <= 149) {
					$cup = "Z";
				}
				else {
					$cup = "Ô’";
					$band = "ò";
				}	
			}

		if (($underbust >= 98) && ($underbust < 103)) {
			$band = "90"

			if ($bust <= 98) {
					$cup = "Ô’";
					$band = "ò";
				}
				else if ($bust <= 100) {
					$cup = "AAA";
				}
				else if ($bust <= 102) {
					$cup = "AA";
				}
				else if ($bust <= 104) {
					$cup = "A";
				}
				else if ($bust <= 106) {
					$cup = "B";
				}
				else if($bust <= 108) {
					$cup = "C";            
				}
				else if($bust <= 110) {
					$cup = "D";
				}
				else if($bust <= 112) {
					$cup = "E";
				}
				else if($bust <= 114) {
					$cup = "F";
				}
				else if($bust <= 116) {
					$cup = "G";
				}
				else if($bust <= 118) {
					$cup = "H";
				}
				else if($bust <= 120) {
					$cup = "I";
				}
				else if($bust <= 122) {
					$cup = "J";
				}
				else if($bust <= 124) {
					$cup = "K";
				}
				else if($bust <= 126) {
					$cup = "L";
				}
				else if($bust <= 128) {
					$cup = "M";
				}
				else if($bust <= 130) {
					$cup = "N";
				}
				else if($bust <= 132) {
					$cup = "O";
				}
				else if($bust <= 134) {
					$cup = "P";
				}
				else if($bust <= 136) {
					$cup = "Q";
				}
				else if($bust <= 138) {
					$cup = "R";
				}
				else if($bust <= 140) {
					$cup = "S";
				}
				else if($bust <= 142) {
					$cup = "T";
				}
				else if ($bust <= 144) {
					$cup = "U";
				}
				else if ($bust <= 146) {
					$cup = "V";
				}
				else if ($bust <= 148) {
					$cup = "W";
				}	
				else if ($bust <= 150) {
					$cup = "X";
				}	
				else if ($bust <= 152) {
					$cup = "Y";
				}	
				else if ($bust <= 154) {
					$cup = "Z";
				}
				else {
					$cup = "Ô’";
					$band = "ò";
				}	
			}

		if (($underbust >= 103) && ($underbust < 108)) {
			$band = "95"

			if ($bust <= 103) {
					$cup = "Ô’";
					$band = "ò";
				}
				else if ($bust <= 105) {
					$cup = "AAA";
				}
				else if ($bust <= 107) {
					$cup = "AA";
				}
				else if ($bust <= 109) {
					$cup = "A";
				}
				else if ($bust <= 111) {
					$cup = "B";
				}
				else if($bust <= 113) {
					$cup = "C";            
				}
				else if($bust <= 115) {
					$cup = "D";
				}
				else if($bust <= 117) {
					$cup = "E";
				}
				else if($bust <= 119) {
					$cup = "F";
				}
				else if($bust <= 121) {
					$cup = "G";
				}
				else if($bust <= 123) {
					$cup = "H";
				}
				else if($bust <= 125) {
					$cup = "I";
				}
				else if($bust <= 127) {
					$cup = "J";
				}
				else if($bust <= 129) {
					$cup = "K";
				}
				else if($bust <= 131) {
					$cup = "L";
				}
				else if($bust <= 133) {
					$cup = "M";
				}
				else if($bust <= 135) {
					$cup = "N";
				}
				else if($bust <= 137) {
					$cup = "O";
				}
				else if($bust <= 139) {
					$cup = "P";
				}
				else if($bust <= 141) {
					$cup = "Q";
				}
				else if($bust <= 143) {
					$cup = "R";
				}
				else if($bust <= 145) {
					$cup = "S";
				}
				else if($bust <= 147) {
					$cup = "T";
				}
				else if ($bust <= 149) {
					$cup = "U";
				}
				else if ($bust <= 151) {
					$cup = "V";
				}
				else if ($bust <= 153) {
					$cup = "W";
				}	
				else if ($bust <= 155) {
					$cup = "X";
				}	
				else if ($bust <= 157) {
					$cup = "Y";
				}	
				else if ($bust <= 159) {
					$cup = "Z";
				}
				else {
					$cup = "Ô’";
					$band = "ò";
				}	
			}

		if (($underbust >= 108) && ($underbust < 113)) {
			$band = "100"

			if ($bust <= 108) {
					$cup = "Ô’";
					$band = "ò";
				}
				else if ($bust <= 110) {
					$cup = "AAA";
				}
				else if ($bust <= 112) {
					$cup = "AA";
				}
				else if ($bust <= 114) {
					$cup = "A";
				}
				else if ($bust <= 116) {
					$cup = "B";
				}
				else if($bust <= 118) {
					$cup = "C";            
				}
				else if($bust <= 120) {
					$cup = "D";
				}
				else if($bust <= 122) {
					$cup = "E";
				}
				else if($bust <= 124) {
					$cup = "F";
				}
				else if($bust <= 126) {
					$cup = "G";
				}
				else if($bust <= 128) {
					$cup = "H";
				}
				else if($bust <= 130) {
					$cup = "I";
				}
				else if($bust <= 132) {
					$cup = "J";
				}
				else if($bust <= 134) {
					$cup = "K";
				}
				else if($bust <= 136) {
					$cup = "L";
				}
				else if($bust <= 138) {
					$cup = "M";
				}
				else if($bust <= 140) {
					$cup = "N";
				}
				else if($bust <= 142) {
					$cup = "O";
				}
				else if($bust <= 144) {
					$cup = "P";
				}
				else if($bust <= 146) {
					$cup = "Q";
				}
				else if($bust <= 148) {
					$cup = "R";
				}
				else if($bust <= 150) {
					$cup = "S";
				}
				else if($bust <= 152) {
					$cup = "T";
				}
				else if ($bust <= 154) {
					$cup = "U";
				}
				else if ($bust <= 156) {
					$cup = "V";
				}
				else if ($bust <= 158) {
					$cup = "W";
				}	
				else if ($bust <= 160) {
					$cup = "X";
				}	
				else if ($bust <= 162) {
					$cup = "Y";
				}	
				else if ($bust <= 164) {
					$cup = "Z";
				}
				else {
					$cup = "Ô’";
					$band = "ò";
				}	
			}

		if (($underbust >= 113) && ($underbust < 118)) {
			$band = "105"

			if ($bust <= 113) {
					$cup = "Ô’";
					$band = "ò";
				}
				else if ($bust <= 115) {
					$cup = "AAA";
				}
				else if ($bust <= 117) {
					$cup = "AA";
				}
				else if ($bust <= 119) {
					$cup = "A";
				}
				else if ($bust <= 121) {
					$cup = "B";
				}
				else if($bust <= 123) {
					$cup = "C";            
				}
				else if($bust <= 125) {
					$cup = "D";
				}
				else if($bust <= 127) {
					$cup = "E";
				}
				else if($bust <= 129) {
					$cup = "F";
				}
				else if($bust <= 131) {
					$cup = "G";
				}
				else if($bust <= 133) {
					$cup = "H";
				}
				else if($bust <= 135) {
					$cup = "I";
				}
				else if($bust <= 137) {
					$cup = "J";
				}
				else if($bust <= 139) {
					$cup = "K";
				}
				else if($bust <= 141) {
					$cup = "L";
				}
				else if($bust <= 143) {
					$cup = "M";
				}
				else if($bust <= 145) {
					$cup = "N";
				}
				else if($bust <= 147) {
					$cup = "O";
				}
				else if($bust <= 149) {
					$cup = "P";
				}
				else if($bust <= 151) {
					$cup = "Q";
				}
				else if($bust <= 153) {
					$cup = "R";
				}
				else if($bust <= 155) {
					$cup = "S";
				}
				else if($bust <= 157) {
					$cup = "T";
				}
				else if ($bust <= 159) {
					$cup = "U";
				}
				else if ($bust <= 161) {
					$cup = "V";
				}
				else if ($bust <= 163) {
					$cup = "W";
				}	
				else if ($bust <= 165) {
					$cup = "X";
				}	
				else if ($bust <= 167) {
					$cup = "Y";
				}	
				else if ($bust <= 169) {
					$cup = "Z";
				}
				else {
					$cup = "Ô’";
					$band = "ò";
				}	
			}

		if (($underbust >= 118) && ($underbust < 123)) {
			$band = "105"

			if ($bust <= 113) {
					$cup = "Ô’";
					$band = "ò";
				}
				else if ($bust <= 115) {
					$cup = "AAA";
				}
				else if ($bust <= 117) {
					$cup = "AA";
				}
				else if ($bust <= 119) {
					$cup = "A";
				}
				else if ($bust <= 121) {
					$cup = "B";
				}
				else if($bust <= 123) {
					$cup = "C";            
				}
				else if($bust <= 125) {
					$cup = "D";
				}
				else if($bust <= 127) {
					$cup = "E";
				}
				else if($bust <= 129) {
					$cup = "F";
				}
				else if($bust <= 131) {
					$cup = "G";
				}
				else if($bust <= 133) {
					$cup = "H";
				}
				else if($bust <= 135) {
					$cup = "I";
				}
				else if($bust <= 137) {
					$cup = "J";
				}
				else if($bust <= 139) {
					$cup = "K";
				}
				else if($bust <= 141) {
					$cup = "L";
				}
				else if($bust <= 143) {
					$cup = "M";
				}
				else if($bust <= 145) {
					$cup = "N";
				}
				else if($bust <= 147) {
					$cup = "O";
				}
				else if($bust <= 149) {
					$cup = "P";
				}
				else if($bust <= 151) {
					$cup = "Q";
				}
				else if($bust <= 153) {
					$cup = "R";
				}
				else if($bust <= 155) {
					$cup = "S";
				}
				else if($bust <= 157) {
					$cup = "T";
				}
				else if ($bust <= 159) {
					$cup = "U";
				}
				else if ($bust <= 161) {
					$cup = "V";
				}
				else if ($bust <= 163) {
					$cup = "W";
				}	
				else if ($bust <= 165) {
					$cup = "X";
				}	
				else if ($bust <= 167) {
					$cup = "Y";
				}	
				else if ($bust <= 169) {
					$cup = "Z";
				}
				else {
					$cup = "Ô’";
					$band = "ò";
				}	
			}


		if (($underbust >= 123) && ($underbust < 128)) {
			$band = "110"

			if ($bust <= 118) {
					$cup = "Ô’";
					$band = "ò";
				}
				else if ($bust <= 120) {
					$cup = "AAA";
				}
				else if ($bust <= 122) {
					$cup = "AA";
				}
				else if ($bust <= 124) {
					$cup = "A";
				}
				else if ($bust <= 126) {
					$cup = "B";
				}
				else if($bust <= 128) {
					$cup = "C";            
				}
				else if($bust <= 130) {
					$cup = "D";
				}
				else if($bust <= 132) {
					$cup = "E";
				}
				else if($bust <= 134) {
					$cup = "F";
				}
				else if($bust <= 136) {
					$cup = "G";
				}
				else if($bust <= 138) {
					$cup = "H";
				}
				else if($bust <= 140) {
					$cup = "I";
				}
				else if($bust <= 142) {
					$cup = "J";
				}
				else if($bust <= 144) {
					$cup = "K";
				}
				else if($bust <= 146) {
					$cup = "L";
				}
				else if($bust <= 148) {
					$cup = "M";
				}
				else if($bust <= 150) {
					$cup = "N";
				}
				else if($bust <= 152) {
					$cup = "O";
				}
				else if($bust <= 154) {
					$cup = "P";
				}
				else if($bust <= 156) {
					$cup = "Q";
				}
				else if($bust <= 158) {
					$cup = "R";
				}
				else if($bust <= 160) {
					$cup = "S";
				}
				else if($bust <= 162) {
					$cup = "T";
				}
				else if ($bust <= 164) {
					$cup = "U";
				}
				else if ($bust <= 166) {
					$cup = "V";
				}
				else if ($bust <= 168) {
					$cup = "W";
				}	
				else if ($bust <= 170) {
					$cup = "X";
				}	
				else if ($bust <= 172) {
					$cup = "Y";
				}	
				else if ($bust <= 174) {
					$cup = "Z";
				}
				else {
					$cup = "Ô’";
					$band = "ò";
				}	
			}


		if (($underbust >= 128) && ($underbust < 133)) {
			$band = "115"

			if ($bust <= 123) {
					$cup = "Ô’";
					$band = "ò";
				}
				else if ($bust <= 125) {
					$cup = "AAA";
				}
				else if ($bust <= 127) {
					$cup = "AA";
				}
				else if ($bust <= 129) {
					$cup = "A";
				}
				else if ($bust <= 131) {
					$cup = "B";
				}
				else if($bust <= 133) {
					$cup = "C";            
				}
				else if($bust <= 135) {
					$cup = "D";
				}
				else if($bust <= 137) {
					$cup = "E";
				}
				else if($bust <= 139) {
					$cup = "F";
				}
				else if($bust <= 141) {
					$cup = "G";
				}
				else if($bust <= 143) {
					$cup = "H";
				}
				else if($bust <= 145) {
					$cup = "I";
				}
				else if($bust <= 147) {
					$cup = "J";
				}
				else if($bust <= 149) {
					$cup = "K";
				}
				else if($bust <= 151) {
					$cup = "L";
				}
				else if($bust <= 153) {
					$cup = "M";
				}
				else if($bust <= 155) {
					$cup = "N";
				}
				else if($bust <= 157) {
					$cup = "O";
				}
				else if($bust <= 159) {
					$cup = "P";
				}
				else if($bust <= 161) {
					$cup = "Q";
				}
				else if($bust <= 163) {
					$cup = "R";
				}
				else if($bust <= 165) {
					$cup = "S";
				}
				else if($bust <= 167) {
					$cup = "T";
				}
				else if ($bust <= 169) {
					$cup = "U";
				}
				else if ($bust <= 171) {
					$cup = "V";
				}
				else if ($bust <= 173) {
					$cup = "W";
				}	
				else if ($bust <= 175) {
					$cup = "X";
				}	
				else if ($bust <= 177) {
					$cup = "Y";
				}	
				else if ($bust <= 179) {
					$cup = "Z";
				}
				else {
					$cup = "Ô’";
					$band = "ò";
				}	
			}

		if (($underbust >= 128) && ($underbust < 133)) {
			$band = "120"

			if ($bust <= 128) {
					$cup = "Ô’";
					$band = "ò";
				}
				else if ($bust <= 130) {
					$cup = "AAA";
				}
				else if ($bust <= 132) {
					$cup = "AA";
				}
				else if ($bust <= 134) {
					$cup = "A";
				}
				else if ($bust <= 136) {
					$cup = "B";
				}
				else if($bust <= 138) {
					$cup = "C";            
				}
				else if($bust <= 140) {
					$cup = "D";
				}
				else if($bust <= 142) {
					$cup = "E";
				}
				else if($bust <= 144) {
					$cup = "F";
				}
				else if($bust <= 146) {
					$cup = "G";
				}
				else if($bust <= 148) {
					$cup = "H";
				}
				else if($bust <= 150) {
					$cup = "I";
				}
				else if($bust <= 152) {
					$cup = "J";
				}
				else if($bust <= 154) {
					$cup = "K";
				}
				else if($bust <= 156) {
					$cup = "L";
				}
				else if($bust <= 158) {
					$cup = "M";
				}
				else if($bust <= 160) {
					$cup = "N";
				}
				else if($bust <= 162) {
					$cup = "O";
				}
				else if($bust <= 164) {
					$cup = "P";
				}
				else if($bust <= 166) {
					$cup = "Q";
				}
				else if($bust <= 168) {
					$cup = "R";
				}
				else if($bust <= 170) {
					$cup = "S";
				}
				else if($bust <= 172) {
					$cup = "T";
				}
				else if ($bust <= 174) {
					$cup = "U";
				}
				else if ($bust <= 176) {
					$cup = "V";
				}
				else if ($bust <= 178) {
					$cup = "W";
				}	
				else if ($bust <= 180) {
					$cup = "X";
				}	
				else if ($bust <= 182) {
					$cup = "Y";
				}	
				else if ($bust <= 184) {
					$cup = "Z";
				}
				else {
					$cup = "Ô’";
					$band = "ò";
				}	
			}

	$("#deSize").html("<small>DE</small> "+ $band +" "+ $cup +"");
	});
});
