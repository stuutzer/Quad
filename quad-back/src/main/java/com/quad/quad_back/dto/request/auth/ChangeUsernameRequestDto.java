package com.quad.quad_back.dto.request.auth;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ChangeUsernameRequestDto {

    @NotBlank
    private String tempUsername;

    @NotBlank
    private String newUsername;
}
